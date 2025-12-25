'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [programName, setProgramName] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  
  const sessionId = searchParams.get('session_id');
  const pdfPath = searchParams.get('pdf');
  const program = searchParams.get('program');

  useEffect(() => {
    if (!sessionId) {
      setError('Missing session ID');
      setLoading(false);
      return;
    }

    const verifyAndDownload = async () => {
      try {
        // Verify the payment with your backend
        const response = await fetch(`/api/verify-session?session_id=${sessionId}`);
        if (!response.ok) {
          throw new Error('Payment verification failed');
        }

        // Set program name for display
        if (program) {
          setProgramName(decodeURIComponent(program));
        }

        // Set PDF URL for download
        if (pdfPath) {
          const decodedPdfUrl = decodeURIComponent(pdfPath);
          setPdfUrl(decodedPdfUrl);
        }

        setSuccess(true);
      } catch (err) {
        console.error('Error:', err);
        setError('There was an error processing your download. Please contact support.');
      } finally {
        setLoading(false);
      }
    };

    verifyAndDownload();
  }, [sessionId, pdfPath, program]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500 mb-4"></div>
        <h1 className="text-2xl font-bold mb-2">Processing Your Purchase</h1>
        <p className="text-gray-400">Please wait while we verify your payment...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-red-900/50 border border-red-700 rounded-lg p-6 max-w-md w-full">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Error</h2>
          <p className="mb-6">{error}</p>
          <div className="flex flex-col space-y-3">
            <Link 
              href="/templates" 
              className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-md text-center transition-colors"
            >
              Back to Programs
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md text-center transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for purchasing {programName}. Your program has been downloaded automatically.
          </p>
          
          <div className="space-y-4">
            {pdfUrl && (
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-600 w-full sm:w-auto"
              >
                Download Program Again
              </a>
            )}
            
            <div className="pt-4">
              <Link 
                href="/templates" 
                className="text-yellow-500 hover:text-yellow-400 font-medium"
              >
                Back to All Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
