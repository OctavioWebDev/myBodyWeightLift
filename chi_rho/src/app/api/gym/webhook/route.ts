import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import {
  insertFoundingMember,
  incrementCampaignTotals,
  cancelMembership,
  renewMembership,
  getCampaignTotals,
} from '@/lib/supabase';
import { sendGymConfirmationEmail } from '@/lib/emailjs';
import { notifyDiscordNewMember, notifyDiscordCancellation } from '@/lib/discord';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-12-15.clover',
  typescript: true,
});

const webhookSecret =
  process.env.STRIPE_GYM_WEBHOOK_SECRET || process.env.STRIPE_WEBHOOK_SECRET || '';

// One-time tiers don't have a Stripe subscription
const RECURRING_TIERS = new Set(['founding-monthly', 'founding-coaching']);

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  if (!sig) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error('Gym webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      // ── New payment completed ─────────────────────────────────────────────
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;

        if (session.metadata?.campaignType !== 'gym_founding') break;

        const tierId      = session.metadata?.tierId   ?? 'unknown';
        const tierName    = session.metadata?.tierName ?? 'Unknown Tier';
        const email       = session.customer_details?.email ?? '';
        const amountCents = session.amount_total ?? 0;
        const isRecurring = RECURRING_TIERS.has(tierId);

        console.log(`New gym founding member: ${tierName} | ${email} | $${amountCents / 100}`);

        // ── 1. Save to database ───────────────────────────────────────────
        await insertFoundingMember({
          stripe_session_id:      session.id,
          stripe_customer_id:     (session.customer as string) ?? null,
          stripe_subscription_id: (session.subscription as string) ?? null,
          email,
          tier_id:      tierId,
          tier_name:    tierName,
          amount_cents: amountCents,
          is_recurring: isRecurring,
          status:       'active',
          cancelled_at:    null,
          last_renewed_at: null,
        });

        // ── 2. Increment campaign totals ──────────────────────────────────
        await incrementCampaignTotals(amountCents);

        // Fetch updated totals for Discord embed
        const totals = await getCampaignTotals();

        // ── 3. Send confirmation email ────────────────────────────────────
        if (email) {
          await sendGymConfirmationEmail({
            toEmail: email,
            tierId,
            tierName,
            amountCents,
          }).catch((err) => {
            console.error('Confirmation email failed:', err);
          });
        }

        // ── 4. Post Discord notification ──────────────────────────────────
        await notifyDiscordNewMember({
          tierId,
          tierName,
          amountCents,
          isRecurring,
          totalBackers:     totals.total_backers,
          totalRaisedCents: totals.total_raised_cents,
        }).catch((err) => {
          console.error('Discord notification failed:', err);
        });

        break;
      }

      // ── Subscription renewal ──────────────────────────────────────────────
      case 'invoice.payment_succeeded': {
        const invoice        = event.data.object as Stripe.Invoice;
        const subscriptionId = (invoice as any).subscription as string;

        if (!subscriptionId) break;

        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        if (subscription.metadata?.campaignType !== 'gym_founding') break;

        // Skip first invoice — already handled by checkout.session.completed
        if (invoice.billing_reason === 'subscription_create') break;

        console.log(`Gym subscription renewed: ${subscriptionId}`);

        await renewMembership(subscriptionId).catch((err) => {
          console.error('Failed to update renewal date:', err);
        });

        break;
      }

      // ── Subscription cancelled ────────────────────────────────────────────
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;

        if (subscription.metadata?.campaignType !== 'gym_founding') break;

        const tierId   = subscription.metadata?.tierId   ?? 'unknown';
        const tierName = subscription.metadata?.tierName ?? 'Unknown Tier';

        console.log(`Gym subscription cancelled: ${subscription.id} (${tierName})`);

        await cancelMembership(subscription.id).catch((err) => {
          console.error('Failed to mark membership cancelled:', err);
        });

        await notifyDiscordCancellation(tierId, tierName).catch((err) => {
          console.error('Discord cancellation notification failed:', err);
        });

        break;
      }

      default:
        // Ignore unhandled event types
        break;
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Error processing gym webhook event:', err);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}