import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-12-15.clover',
  typescript: true,
});

// Map template IDs to their corresponding PDF filenames
const pdfFiles: Record<string, string> = {
  // Beginner Programs
  'beginner-strength-2day': 'Foundational_Strength_2Day_Program.pdf',
  'beginner-strength-3day': 'Foundational_Strength_3Day_Program.pdf',
  
  // Intermediate Hypertrophy Programs
  'intermediate-hypertrophy-3day': 'Hypertrophy_Strength_8Week_Program.pdf',
  'intermediate-hypertrophy-4day': 'Hypertrophy_Strength_8Week_Program.pdf',
  
  // Advanced Powerlifting Programs
  'advanced-powerlifting-3day': 'Powerlifting_Competition_12Week_Program.pdf',
  'advanced-powerlifting-4day': 'Advanced_Powerlifting_4Day_Program.pdf',
  
  // Advanced Volume Program
  'advanced-volume-4day': 'Advanced_Volume_4Day_Program.pdf'
} as const;

// Helper function to get the PDF path
function getPdfPath(filename: string): string {
  return join(process.cwd(), 'public', 'pdfs', filename);
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const templateId = searchParams.get('templateId');
    const sessionId = searchParams.get('session_id');

    if (!templateId || !sessionId) {
      return new NextResponse('Missing required parameters (templateId and session_id)', { status: 400 });
    }

    // Verify the Stripe session to ensure the user has paid for this template
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      
      // Check if the session is paid
      if (session.payment_status !== 'paid') {
    
        return new NextResponse('Payment not completed. Please complete your purchase first.', { status: 402 });
      }
      
      // FIXED: Verify the template ID matches what was purchased using metadata
      if (session.metadata?.templateId !== templateId) {
        return new NextResponse('Template ID does not match your purchase.', { status: 403 });
      }
      
    } catch (error) {
      return new NextResponse('Error verifying payment. Please contact support.', { status: 500 });
    }
    
    const pdfFilename = pdfFiles[templateId];
    if (!pdfFilename) {
      return new NextResponse('Template not found', { status: 404 });
    }

    try {
      const pdfPath = getPdfPath(pdfFilename);
      const pdfBuffer = await readFile(pdfPath);

      return new NextResponse(pdfBuffer, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${pdfFilename}"`,
          'Cache-Control': 'private, no-cache, no-store, must-revalidate',
        },
      });
    } catch (fileError) {
      return new NextResponse('PDF file not found. Please contact support.', { status: 500 });
    }
  } catch (error) {
    return new NextResponse('Error processing download. Please contact support.', { status: 500 });
  }
}