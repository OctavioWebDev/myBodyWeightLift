import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();
    
    // In a real app, you would:
    // 1. Validate the input
    // 2. Save to a database
    // 3. Send an email notification
    
    // For now, we'll just log the submission
    console.log('New contact form submission:', {
      name,
      email,
      service,
      message,
      timestamp: new Date().toISOString()
    });
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to process your request' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
