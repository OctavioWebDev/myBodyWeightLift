'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [downloadAttempted, setDownloadAttempted] = useState(false);
  
  const sessionId = searchParams.get('session_id');
  const templateId = searchParams.get('templateId');

  useEffect(() => {
    // Validate required parameters
    if (!sessionId || !templateId) {
      setError('Missing required information. Please contact support with your order confirmation.');
      setLoading(false);
      return;
    }

    // Auto-download on successful load
    if (!downloadAttempted) {
      setDownloadAttempted(true);
      setLoading(false);
      
      // Trigger download automatically
      const downloadUrl = `/api/download?templateId=${templateId}&session_id=${sessionId}`;
      
      // Create a hidden link and click it to trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [sessionId, templateId, downloadAttempted]);

  const handleManualDownload = () => {
    if (!sessionId || !templateId) {
      setError('Missing required information');
      return;
    }
    
    window.location.href = `/api/download?templateId=${templateId}&session_id=${sessionId}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-700">Processing your purchase...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-4 text-center bg-white p-8 rounded-lg shadow-lg">
          <div className="text-red-600 text-5xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-red-600">Error</h1>
          <p className="text-gray-700">{error}</p>
          <div className="pt-4 space-y-2">
            <p className="text-sm text-gray-600">Session ID: {sessionId || 'Not provided'}</p>
            <p className="text-sm text-gray-600">Template ID: {templateId || 'Not provided'}</p>
          </div>
          <div className="pt-4">
            <Link
              href="/templates"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Templates
            </Link>
          </div>
          <div className="pt-2">
            <a
              href="mailto:support@chirhopowerstrength.com"
              className="text-sm text-blue-600 hover:underline"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6 text-center bg-white p-8 rounded-lg shadow-lg">
        <div className="text-green-600 text-6xl mb-4">✓</div>
        <h1 className="text-3xl font-bold text-green-600">Thank You!</h1>
        <p className="text-gray-700 text-lg">Your purchase was successful!</p>
        <p className="text-gray-600">Your training program should download automatically.</p>
        
        <div className="pt-6 space-y-3">
          <button
            onClick={handleManualDownload}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Download Template
          </button>
          
          <p className="text-sm text-gray-500">
            Didn't receive your download? Click the button above or contact support.
          </p>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <Link
            href="/templates"
            className="inline-block px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors"
          >
            ← Browse More Templates
          </Link>
        </div>

        <div className="pt-4 text-sm text-gray-500">
          <p>Order Details:</p>
          <p className="font-mono text-xs mt-1">Session: {sessionId}</p>
          <p className="font-mono text-xs">Template: {templateId}</p>
        </div>
      </div>
    </div>
  );
}