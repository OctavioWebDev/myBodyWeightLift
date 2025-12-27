// src/app/templates/[templateId]/TemplateClient.tsx
'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Template } from '@/types/template';

type TemplateClientProps = {
  template: Template;
};



const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function TemplateClient({ template }: TemplateClientProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const success = searchParams.get('success');
  const canceled = searchParams.get('canceled');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    
    if (query.get('success')) {
    }

    if (query.get('canceled')) {
    }
  }, []);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          templateId: template.id,
          successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}&templateId=${template.id}`,
          cancelUrl: window.location.href,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const { url } = await response.json();
      
      // Redirect to the Checkout page
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL returned from server');
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back to Templates Link */}
        <Link 
          href="/templates" 
          className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Templates
        </Link>

        {/* Success/Cancel Messages */}
        {success && (
          <div className="bg-green-900/50 border border-green-600 text-green-200 px-4 py-3 rounded-lg mb-6">
            <p>Payment successful! Your template is now available in your account.</p>
          </div>
        )}
        {canceled && (
          <div className="bg-yellow-900/50 border border-yellow-600 text-yellow-200 px-4 py-3 rounded-lg mb-6">
            <p>Order canceled. Feel free to continue browsing our templates.</p>
          </div>
        )}

        {/* Template Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-800">
              <Image
                src={template.image}
                alt={template.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded-full">
                {template.category}
              </span>
              <span className="text-gray-400 text-sm">•</span>
              <span className="text-gray-400 text-sm">{template.duration}</span>
              <span className="text-gray-400 text-sm">•</span>
              <span className="text-gray-400 text-sm">{template.level}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{template.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{template.longDescription || template.description}</p>
            
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-3xl font-bold text-yellow-500">${template.price.toFixed(2)}</span>
                <span className="text-gray-400 ml-2">one-time payment</span>
              </div>
              
              <button
                onClick={handleCheckout}
                disabled={loading}
                className={`px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors flex items-center ${
                  loading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Purchase Now'
                )}
              </button>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-lg font-semibold mb-3">What's Included:</h3>
              <ul className="space-y-2">
                {template.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Template Preview */}
        {template.previewImage && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Template Preview</h2>
            <div className="border border-gray-700 rounded-xl overflow-hidden">
              <div className="relative aspect-[16/9] bg-gray-800">
                <Image
                  src={template.previewImage}
                  alt={`${template.title} Preview`}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 bg-gray-800/50 border-t border-gray-700">
                <p className="text-center text-gray-400 text-sm">
                  This is a preview of what you'll receive. The full template includes detailed instructions and more.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-lg font-semibold mb-2">How will I receive my template after purchase?</h3>
              <p className="text-gray-300">Immediately after a successful purchase, you'll receive an email with a download link. You'll also have access to the template in your account dashboard.</p>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-lg font-semibold mb-2">Is there a money-back guarantee?</h3>
              <p className="text-gray-300">Yes! We offer a 30-day money-back guarantee if you're not satisfied with your purchase for any reason.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I get support if I have questions about the program?</h3>
              <p className="text-gray-300">Absolutely! Our support team is available to answer any questions you have about the program. Just email us at support@chirhostrength.com.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Training?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of athletes who have improved their performance with our training templates.
          </p>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className={`px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors text-lg ${
              loading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Processing...' : `Get ${template.title} for $${template.price.toFixed(2)}`}
          </button>
        </div>
      </div>
    </div>
  );
}
