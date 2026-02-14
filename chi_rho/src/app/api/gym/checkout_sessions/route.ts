import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-12-15.clover',
  typescript: true,
});

// Gym founding member tier configuration
const gymTierConfig = {
  'community-supporter': {
    name: 'Community Supporter',
    description: 'One-time founding member contribution to Chi-Rho Barbell Club',
    amount: 2500, // $25.00 in cents
    mode: 'payment' as const,
    recurring: false,
  },
  'supporter-plus': {
    name: 'Supporter Plus',
    description: 'One-time founding member contribution to Chi-Rho Barbell Club',
    amount: 5000, // $50.00 in cents
    mode: 'payment' as const,
    recurring: false,
  },
  'founding-annual': {
    name: 'Founding Annual Member',
    description: '1-year founding membership — locked-in rate for life of membership',
    amount: 30000, // $300.00 in cents
    mode: 'payment' as const,
    recurring: false,
  },
  'founding-monthly': {
    name: 'Founding Monthly Member',
    description: 'Monthly founding membership — $35/month, locked in for life of membership',
    amount: 3500, // $35.00/month in cents
    mode: 'subscription' as const,
    recurring: true,
    interval: 'month' as const,
  },
  'founding-coaching': {
    name: 'Founding Coaching Client',
    description: 'Monthly gym membership + online coaching — $197/month',
    amount: 19700, // $197.00/month in cents
    mode: 'subscription' as const,
    recurring: true,
    interval: 'month' as const,
  },
} as const;

export type GymTierId = keyof typeof gymTierConfig;

export async function POST(request: Request) {
  try {
    const { tierId, successUrl, cancelUrl } = await request.json();

    if (!tierId) {
      return NextResponse.json(
        { error: 'Tier ID is required' },
        { status: 400 }
      );
    }

    const tier = gymTierConfig[tierId as GymTierId];

    if (!tier) {
      return NextResponse.json(
        { error: 'Invalid tier ID' },
        { status: 400 }
      );
    }

    const baseSuccessUrl =
      successUrl ||
      `${process.env.NEXT_PUBLIC_BASE_URL}/gym/success?session_id={CHECKOUT_SESSION_ID}&tierId=${tierId}`;
    const baseCancelUrl = cancelUrl || `${process.env.NEXT_PUBLIC_BASE_URL}/gym`;

    let session;

    if (tier.mode === 'subscription') {
      // Recurring subscription tiers
      session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: tier.name,
                description: tier.description,
              },
              unit_amount: tier.amount,
              recurring: {
                interval: tier.interval,
              },
            },
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: baseSuccessUrl,
        cancel_url: baseCancelUrl,
        metadata: {
          tierId,
          tierName: tier.name,
          campaignType: 'gym_founding',
        },
      });
    } else {
      // One-time payment tiers
      session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: tier.name,
                description: tier.description,
              },
              unit_amount: tier.amount,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: baseSuccessUrl,
        cancel_url: baseCancelUrl,
        metadata: {
          tierId,
          tierName: tier.name,
          campaignType: 'gym_founding',
        },
      });
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Error creating gym checkout session:', err);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}