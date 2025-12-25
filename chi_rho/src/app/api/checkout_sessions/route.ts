import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-12-15.clover',
  typescript: true,
});

// Template configuration with prices and corresponding PDFs
const templateConfig = {
  'beginner-strength-2day': {
    price: 500,
    pdf: '/pdfs/Foundational_Strength_2Day_Program.pdf',
    name: 'Foundational Strength 2-Day Program'
  },
  'beginner-strength-3day': {
    price: 500,
    pdf: '/pdfs/Foundational_Strength_3Day_Program.pdf',
    name: 'Foundational Strength 3-Day Program'
  },
  'intermediate-hypertrophy-3day': {
    price: 500,
    pdf: '/pdfs/Hypertrophy_Strength_8Week_Program.pdf',
    name: 'Hypertrophy & Strength 3-Day Program'
  },
  'intermediate-hypertrophy-4day': {
    price: 500,
    pdf: '/pdfs/Hypertrophy_Strength_8Week_Program.pdf',
    name: 'Hypertrophy & Strength 4-Day Program'
  },
  'advanced-powerlifting-3day': {
    price: 500,
    pdf: '/pdfs/Powerlifting_Competition_12Week_Program.pdf',
    name: 'Advanced Powerlifting 3-Day Program'
  },
  'advanced-powerlifting-4day': {
    price: 500,
    pdf: '/pdfs/Advanced_Powerlifting_4Day_Program.pdf',
    name: 'Advanced Powerlifting 4-Day Program'
  },
  'advanced-volume-4day': {
    price: 500,
    pdf: '/pdfs/Advanced_Volume_4Day_Program.pdf',
    name: 'Advanced Volume 4-Day Program'
  }
} as const;

export async function POST(request: Request) {
  try {
    const { templateId, successUrl, cancelUrl } = await request.json();

    if (!templateId) {
      return NextResponse.json(
        { error: 'Template ID is required' },
        { status: 400 }
      );
    }

    const template = templateConfig[templateId as keyof typeof templateConfig];
    
    if (!template) {
      return NextResponse.json(
        { error: 'Invalid template ID' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: template.name,
              description: 'Digital download of training program',
              images: ['https://your-website.com/logo.png'],
            },
            unit_amount: template.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl || `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}&program=${encodeURIComponent(template.name)}&pdf=${encodeURIComponent(template.pdf)}`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_BASE_URL}/templates`,
      metadata: {
        templateId,
        pdfPath: template.pdf,
        programName: template.name
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Error creating checkout session:', err);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}
