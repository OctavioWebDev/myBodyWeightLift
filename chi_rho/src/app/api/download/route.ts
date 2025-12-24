import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

// Map template IDs to their corresponding PDF filenames
const pdfFiles: Record<string, string> = {
  'beginner-strength': 'beginner-strength-program.pdf',
  // Add more mappings as needed: 'template-id': 'filename.pdf'
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
      return new NextResponse('Missing parameters', { status: 400 });
    }

    // In a real app, you would verify the session with Stripe here
    // to ensure the user has actually paid for this template
    
    const pdfFilename = pdfFiles[templateId];
    if (!pdfFilename) {
      return new NextResponse('Template not found', { status: 404 });
    }

    const pdfPath = getPdfPath(pdfFilename);
    const pdfBuffer = await readFile(pdfPath);

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${templateId}.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return new NextResponse('Error generating PDF', { status: 500 });
  }
}
