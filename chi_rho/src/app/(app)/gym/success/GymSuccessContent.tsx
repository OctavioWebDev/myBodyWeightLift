'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const tierMessages: Record<string, { headline: string; body: string; emoji: string }> = {
  'community-supporter': {
    emoji: '🙌',
    headline: 'You\'re a Community Supporter!',
    body: 'Thank you for believing in this project. Your contribution goes directly toward making Chi-Rho Barbell Club a reality in Toledo.',
  },
  'supporter-plus': {
    emoji: '💪',
    headline: 'Supporter Plus — Thank You!',
    body: 'Your generosity is making this gym possible. When we open, you\'ll have a place to train that actually fits your goals.',
  },
  'founding-annual': {
    emoji: '🏆',
    headline: 'Founding Annual Member!',
    body: 'You\'ve locked in your founding rate for the life of your membership. You\'ll receive full details and your member number via email.',
  },
  'founding-monthly': {
    emoji: '🔑',
    headline: 'Founding Monthly Member!',
    body: 'Your $35/month rate is locked in for life. You\'ll receive your founding member number and updates on the gym build-out via email.',
  },
  'founding-coaching': {
    emoji: '🎯',
    headline: 'Founding Coaching Client — Welcome!',
    body: 'You\'ve secured gym access + online coaching at the founding rate. I\'ll reach out within 48 hours to get your coaching started.',
  },
};

const defaultMessage = {
  emoji: '✅',
  headline: 'Thank You for Your Support!',
  body: 'Your contribution has been received. You\'ll get a confirmation email shortly.',
};

export default function GymSuccessContent() {
  const searchParams = useSearchParams();
  const tierId = searchParams.get('tierId') || '';
  const sessionId = searchParams.get('session_id') || '';

  const message = tierMessages[tierId] || defaultMessage;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="text-7xl mb-6">{message.emoji}</div>

        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
          {message.headline}
        </h1>

        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">{message.body}</p>

        {/* What's Next */}
        <div className="bg-gray-900/80 border border-yellow-500/20 rounded-xl p-6 mb-8 text-left">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">What Happens Next</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">✓</span>
              <span>Confirmation email on its way to your inbox</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">✓</span>
              <span>You'll receive updates on the gym build-out as we hit milestones</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">✓</span>
              <span>Founding members get first access when we open</span>
            </li>
            {tierId === 'founding-coaching' && (
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">✓</span>
                <span>
                  Expect a message from me within 48 hours to kick off your coaching
                </span>
              </li>
            )}
          </ul>
        </div>

        {/* Questions */}
        <p className="text-gray-400 text-sm mb-8">
          Questions? Email{' '}
          <a
            href="mailto:chirhostrength@gmail.com"
            className="text-yellow-400 hover:text-yellow-300"
          >
            chirhostrength@gmail.com
          </a>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/gym"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Back to Campaign
          </Link>
          <Link
            href="/coaching"
            className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View Coaching Options
          </Link>
        </div>
      </div>
    </div>
  );
}