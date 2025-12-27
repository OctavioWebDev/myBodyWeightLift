import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-12-15.clover',
  typescript: true,
});

/**
 * Customer Support Endpoint
 * Retrieves download information for customers who paid but didn't receive their PDF
 * 
 * Usage: GET /api/support/retrieve-download?session_id=cs_xxx
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Check if payment was completed
    if (session.payment_status !== 'paid') {
      return NextResponse.json({
        error: 'Payment not completed',
        payment_status: session.payment_status,
        session_id: sessionId
      }, { status: 402 });
    }

    // Get template information from metadata
    const templateId = session.metadata?.templateId;
    const programName = session.metadata?.programName;
    const pdfPath = session.metadata?.pdfPath;

    if (!templateId) {
      return NextResponse.json({
        error: 'Template information not found in session',
        session_id: sessionId,
        metadata: session.metadata
      }, { status: 404 });
    }

    // Generate download URL
    const downloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/download?templateId=${templateId}&session_id=${sessionId}`;

    return NextResponse.json({
      success: true,
      session_id: sessionId,
      payment_status: session.payment_status,
      template_id: templateId,
      program_name: programName,
      pdf_path: pdfPath,
      download_url: downloadUrl,
      customer_email: session.customer_details?.email,
      amount_paid: session.amount_total ? `$${(session.amount_total / 100).toFixed(2)}` : 'N/A',
      created: new Date(session.created * 1000).toISOString()
    });

  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Error retrieving session information',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * POST endpoint to send recovery email (optional - requires email service setup)
 */
export async function POST(request: Request) {
  try {
    const { sessionId, email } = await request.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Retrieve session info
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 402 }
      );
    }

    const templateId = session.metadata?.templateId;
    const customerEmail = email || session.customer_details?.email;

    if (!templateId || !customerEmail) {
      return NextResponse.json(
        { error: 'Missing required information' },
        { status: 400 }
      );
    }

    const downloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/download?templateId=${templateId}&session_id=${sessionId}`;

    // TODO: Implement email sending service (SendGrid, Resend, etc.)
    // For now, just return the download URL
    
    return NextResponse.json({
      success: true,
      message: 'Download link generated',
      download_url: downloadUrl,
      customer_email: customerEmail
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Error processing request' },
      { status: 500 }
    );
  }
}