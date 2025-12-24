'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sessionId = searchParams.get('session_id');
  const templateId = searchParams.get('templateId');
  const [downloadStarted, setDownloadStarted] = useState(false);

  useEffect(() => {
    if (!sessionId || !templateId) {
      setError('Missing required parameters');
      setLoading(false);
      return;
    }

    // Only trigger download once
    if (!downloadStarted) {
      const downloadLink = `/api/download?templateId=${templateId}&session_id=${sessionId}`;
      window.location.href = downloadLink;
      setDownloadStarted(true);
    }
    
    setLoading(false);
  }, [sessionId, templateId, downloadStarted]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div>Preparing your download...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
        <div className="text-red-500 mb-4">Error: {error}</div>
        <Link href="/templates" className="text-yellow-500 hover:text-yellow-400">
          Back to Templates
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <div className="text-green-500 text-6xl mb-6">✓</div>
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-300 mb-8">
          Your template download should start automatically. If it doesn't, click the button below.
        </p>
        <div className="space-y-4">
          <a
            href={`/api/download?templateId=${templateId}&session_id=${sessionId}`}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-600"
          >
            Download Template
          </a>
          <div>
            <Link href="/templates" className="text-yellow-500 hover:text-yellow-400">
              Back to Templates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
      setLoading(false);
      return;
    }

    const verifySession = async () => {
      try {
        const response = await fetch(`/api/verify-session?session_id=${sessionId}`);
        const data = await response.json();
        
        if (data.error) {
          setError(data.error);
        } else {
          setTemplateId(data.templateId);
        }
      } catch (err) {
        console.error('Error verifying session:', err);
        setError('Error verifying your purchase. Please contact support.');
      } finally {
        setLoading(false);
      }
    };

    verifySession();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500 mb-4"></div>
        <h1 className="text-2xl font-bold mb-2">Processing Your Purchase</h1>
        <p className="text-gray-400">Please wait while we verify your payment...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-red-900/50 border border-red-500 text-red-200 p-6 rounded-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">Payment Error</h1>
          <p className="mb-6">{error}</p>
          <Link 
            href="/templates" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition-colors"
          >
            Back to Templates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
      <div className="bg-green-900/20 border border-green-500 p-8 rounded-lg max-w-2xl w-full">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-xl text-gray-300 mb-8">Thank you for your purchase.</p>
        
        <div className="bg-gray-900 p-6 rounded-lg mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4">Your Download is Ready</h2>
          <p className="mb-4">Your training template has been added to your account.</p>
          
          <div className="mt-6">
            <a
              href={`/api/download?template=${templateId}`}
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors w-full sm:w-auto text-center"
              download
            >
              Download Template
            </a>
            <p className="text-sm text-gray-400 mt-2">
              Can't download? Check your email for a download link.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/templates" 
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
          >
            View More Templates
          </Link>
          <Link 
            href="/" 
            className="border border-gray-600 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
