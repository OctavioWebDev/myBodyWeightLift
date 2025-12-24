import { NextResponse } from 'next/server';
import { generateTemplatePdf } from '@/lib/generatePdf';

// This would typically come from your database
const templates = {
  'beginner-strength': {
    id: 'beginner-strength',
    title: 'Beginner Strength Program',
    description: 'A 12-week program designed for beginners to build a solid foundation of strength and proper movement patterns.',
    longDescription: 'This comprehensive 12-week program is perfect for those new to strength training. It focuses on mastering the fundamental movement patterns while progressively increasing intensity. Each workout is designed to be completed in under an hour, making it perfect for busy schedules.',
    price: 5.00,
    category: 'Strength',
    duration: '12 weeks',
    level: 'Beginner',
    features: [
      '3-4 workouts per week',
      'Detailed exercise instructions',
      'Progressive overload plan',
      'Warm-up and cool-down routines',
      'Form cues and technique tips',
      'Printable workout logs'
    ]
  },
  // Add other templates here
} as const;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const templateId = searchParams.get('templateId');
    const sessionId = searchParams.get('session_id');

    if (!templateId || !sessionId) {
      return new NextResponse('Missing parameters', { status: 400 });
    }

    // In a real app, you would verify the session with Stripe here
    // to ensure the user has actually paid for this template
    
    const template = templates[templateId as keyof typeof templates];
    if (!template) {
      return new NextResponse('Template not found', { status: 404 });
    }

    const pdfBlob = await generateTemplatePdf(template);
    const pdfBuffer = await pdfBlob.arrayBuffer();

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${template.title.replace(/\s+/g, '-').toLowerCase()}.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return new NextResponse('Error generating PDF', { status: 500 });
  }
}
