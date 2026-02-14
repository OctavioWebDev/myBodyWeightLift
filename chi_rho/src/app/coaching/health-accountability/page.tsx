'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheck, FaHeartbeat, FaBalanceScale, FaDumbbell, FaAppleAlt, FaWalking } from 'react-icons/fa';

export default function HealthAccountabilityCoaching() {
  const includedFeatures = [
    'Custom 2-3 day/week strength program designed around your limitations',
    'Weekly 15-minute accountability check-ins',
    'Walking/cardio programming and tracking',
    'Basic nutrition framework (calorie targets, protein goals, meal timing)',
    'Form check video analysis (2 videos/week)',
    'Email/text support (48-hour response)',
    'Monthly progress assessments and program adjustments'
  ];

  const notIncluded = [
    'Competition lift focus or meet prep',
    'Aggressive strength progression',
    'Detailed meal planning',
    'Daily messaging access'
  ];

  const whatsIncluded = [
    {
      icon: <FaDumbbell className="w-6 h-6 text-yellow-500" />,
      title: 'Modified Strength Training',
      description: '2-3 days per week of safe, effective resistance training. Conservative progression designed to preserve muscle while losing fat. Exercise selection around your medical limitations.'
    },
    {
      icon: <FaWalking className="w-6 h-6 text-yellow-500" />,
      title: 'Walking Program',
      description: 'Structured daily step targets with progressive increases. Low-impact cardio that supports fat loss without interfering with recovery. Weekly check-ins to ensure adherence.'
    },
    {
      icon: <FaAppleAlt className="w-6 h-6 text-yellow-500" />,
      title: 'Nutrition Basics',
      description: 'Calorie and protein targets based on your goals. Simple, sustainable changes—not restrictive dieting. Weekly accountability to build lasting habits.'
    },
    {
      icon: <FaHeartbeat className="w-6 h-6 text-yellow-500" />,
      title: 'Weekly Check-Ins',
      description: '15-minute calls focused on adherence, problem-solving barriers, and keeping you accountable. This is where the real coaching happens.'
    }
  ];

  const whoItsFor = [
    {
      title: 'Significant Weight to Lose',
      description: 'If you need to lose 50+ pounds in a sustainable, healthy way that preserves muscle mass and builds strength.'
    },
    {
      title: 'Medical Considerations',
      description: 'If you have injuries, limitations, or health conditions that require modified programming and careful progression.'
    },
    {
      title: 'Need Accountability',
      description: 'If you know what to do but struggle with consistency and need someone to keep you on track week after week.'
    },
    {
      title: 'Lifestyle Change Focus',
      description: 'If you want to build sustainable habits—not just follow a diet for 12 weeks and then fall off the wagon.'
    }
  ];

  const whatYouGet = [
    {
      month: 'Month 1',
      title: 'Foundation & Habit Building',
      goals: [
        'Establish 2x/week training consistency',
        'Build walking habit (7,500-10,000 steps/day)',
        'Begin basic nutrition tracking and awareness',
        'Learn proper movement patterns at conservative loads'
      ],
      expectedProgress: '8-15 lbs lost (often more initially with water weight)'
    },
    {
      month: 'Month 2-3',
      title: 'Solidifying the System',
      goals: [
        'Maintain near-perfect training attendance',
        'Increase to 3x/week training if recovered well',
        'Refine nutrition habits (protein timing, meal structure)',
        'Progressive challenge in strength work'
      ],
      expectedProgress: '12-18 lbs additional loss'
    },
    {
      month: 'Month 4-6',
      title: 'Building Momentum',
      goals: [
        'Introduce more traditional strength movements as appropriate',
        'Add light conditioning/circuits if tolerated',
        'Nutrition becomes second nature',
        'Strength work becomes more challenging'
      ],
      expectedProgress: '20-30 lbs additional loss'
    },
    {
      month: 'Month 7-12',
      title: 'Sustainable Lifestyle',
      goals: [
        'Training feels routine, not forced',
        'May transition to Foundation or Strength Athlete tier',
        'Habits are locked in for life',
        'Continued steady progress'
      ],
      expectedProgress: 'Remaining 40-60+ lbs toward your goal'
    }
  ];

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/coaching"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Coaching Options
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/10 rounded-full mb-6">
            <FaBalanceScale className="w-10 h-10 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Health & Accountability Coaching
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            For people committed to sustainable fat loss and building strength foundations
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Not a quick-fix program. Not a body transformation challenge. This is about making fundamental changes that last a lifetime.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gray-900 rounded-xl p-8 border-2 border-yellow-500">
            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl font-bold text-yellow-500">$197</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-gray-300">Month-to-month, cancel anytime with 30-day notice</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
              <p className="text-yellow-400 font-semibold mb-2">Success Guarantee</p>
              <p className="text-gray-300 text-sm">
                Train 2x/week and attend weekly check-ins for 8 weeks. If you don't see measurable progress 
                (weight loss + strength improvements), you get your 9th week free.
              </p>
            </div>

            <Link
              href="/contact?service=health-accountability"
              className="block w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-6 rounded-lg transition duration-200 text-center text-lg"
            >
              Apply for Coaching
            </Link>
          </div>
        </div>

        {/* What This Is / Isn't */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900/80 rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">What This Is</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaCheck className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Sustainable fat loss while preserving muscle</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Building healthy habits that last forever</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Safe strength training with medical considerations</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Weekly accountability and problem-solving</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Realistic timeline (18-24 months for major weight loss)</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/80 rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-red-400 mb-6">What This Isn't</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-400 mr-3 mt-1">✗</span>
                <span className="text-gray-300">A quick-fix body transformation program</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3 mt-1">✗</span>
                <span className="text-gray-300">Aggressive strength training or powerlifting prep</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3 mt-1">✗</span>
                <span className="text-gray-300">A restrictive diet or meal plan</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3 mt-1">✗</span>
                <span className="text-gray-300">Daily check-ins or constant hand-holding</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3 mt-1">✗</span>
                <span className="text-gray-300">Magic pills, supplements, or shortcuts</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {whatsIncluded.map((item, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h3 className="font-semibold text-yellow-400 mb-4">Included:</h3>
              <ul className="space-y-2">
                {includedFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <FaCheck className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h3 className="font-semibold text-gray-400 mb-4">Not Included:</h3>
              <ul className="space-y-2">
                {notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <span className="text-gray-600 mr-2">✗</span>
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Who This Is For */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Who This Is For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whoItsFor.map((item, index) => (
              <div key={index} className="bg-gray-900/80 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
            What to Expect: The First Year
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            This is a marathon, not a sprint. Here's a realistic timeline for significant weight loss (100+ lbs).
          </p>
          <div className="space-y-6">
            {whatYouGet.map((phase, index) => (
              <div key={index} className="bg-gray-900/80 rounded-xl p-6 border border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400">{phase.month}</h3>
                    <p className="text-white">{phase.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Expected Progress:</p>
                    <p className="text-yellow-500 font-semibold">{phase.expectedProgress}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.goals.map((goal, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span className="text-gray-300 text-sm">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 text-center">
            <p className="text-white text-lg mb-2">
              <strong className="text-yellow-400">Reality Check:</strong> 100-150 lb weight loss = 18-24 months minimum
            </p>
            <p className="text-gray-300">
              That's 1-2 lbs per week average. Some weeks more, some weeks less. Plateaus will happen. 
              Consistency matters more than perfection.
            </p>
          </div>
        </div>

        {/* How It Aligns With My Philosophy */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-xl p-8 md:p-12 border border-yellow-500/20 mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Still "Shut Up and Lift"—Just Applied Differently
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-black/30 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-white mb-3">Simple Beats Complex</h3>
              <p className="text-gray-300">
                You don't need 15 exercises. You need 2-3 days of basic movements, daily walks, 
                and sensible eating. That's it.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-white mb-3">Progressive Overload Still Applies</h3>
              <p className="text-gray-300">
                We're not chasing PRs, but we're still adding reps, adding weight (slowly), 
                and making you stronger. The principle is the same—just at a different pace.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-white mb-3">Consistency Over Perfection</h3>
              <p className="text-gray-300">
                Showing up 2x/week for a year beats the "perfect" program you quit after 6 weeks. 
                This is about building habits that stick.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Common Questions</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                q: "I need to lose 130+ pounds. Is this really going to take 2 years?",
                a: "If you do it right and keep the weight off, yes. Crash diets don't work long-term. We're building a lifestyle, not doing a 12-week challenge. Sustainable fat loss is 1-2 lbs per week. Do the math."
              },
              {
                q: "Can I do this with medical issues (hernias, disc problems, etc.)?",
                a: "Probably, but you need medical clearance first. I'll need written clearance from your doctor that you can do resistance training. Then we'll modify everything around your limitations."
              },
              {
                q: "What if I can't make it to the gym 2-3 times per week?",
                a: "Then this isn't for you right now. Consistency is non-negotiable. If you can't commit to 2 sessions per week minimum, we're wasting each other's time."
              },
              {
                q: "Will you give me a meal plan?",
                a: "No. I'll give you calorie targets, protein goals, and basic guidelines. You're an adult—you can figure out what to eat within those parameters. I'll help you problem-solve, but I'm not meal-planning for you."
              },
              {
                q: "How is this different from your other coaching packages?",
                a: "Foundation/Strength Athlete packages are for people pursuing strength as the primary goal. This package is for people who need significant fat loss with strength training as a tool. Different goal, different approach."
              },
              {
                q: "Can I upgrade to a different tier later?",
                a: "Absolutely. Once you've lost 80-100 lbs and want to pursue serious strength training, we can transition you to Foundation or Strength Athlete coaching."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/10">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-300 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 md:p-12 text-center border border-yellow-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Change That Lasts?</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No gimmicks. No quick fixes. Just honest coaching to help you lose weight, 
            build strength, and create habits that stick.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/contact?service=health-accountability"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Apply for Coaching
            </Link>
            <Link 
              href="/contact?service=consultation"
              className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-4 px-8 rounded-lg transition duration-200"
            >
              Schedule Free Consultation
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Not sure if this is right for you? Let's talk. No pressure, no hard sell.
          </p>
        </div>
      </div>
    </div>
  );
}