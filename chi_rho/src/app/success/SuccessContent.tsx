'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessContent() {
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
  }, [sessionId, templateId, downloadStarted]);

  if (loading) {
    return <div>Processing your purchase...</div>;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-4 text-center">
          <h1 className="text-2xl font-bold text-red-600">Error</h1>
          <p className="text-gray-700">{error}</p>
          <Link
            href="/templates"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to Templates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-4 text-center">
        <h1 className="text-3xl font-bold text-green-600">Thank You!</h1>
        <p className="text-gray-700">Your purchase was successful. Your download should start automatically.</p>
        {!downloadStarted && (
          <p className="text-sm text-gray-500">If the download doesn't start, please click the button below.</p>
        )}
        <div className="pt-4">
          <Link
            href={`/api/download?templateId=${templateId}&session_id=${sessionId}`}
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Download Template
          </Link>
        </div>
      </div>
    </div>
  );
}