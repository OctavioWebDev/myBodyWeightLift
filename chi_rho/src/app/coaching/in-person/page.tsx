'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheck, FaDumbbell, FaUsers, FaTrophy } from 'react-icons/fa';

export default function InPersonCoaching() {
  const packages = [
    {
      name: 'Single Session',
      price: '$75',
      period: '/session',
      duration: '60 minutes',
      description: 'Perfect for technique refinement or getting started with barbell training.',
      cta: 'Book Session',
      popular: false
    },
    {
      name: '4-Session Package',
      price: '$280',
      period: 'total',
      savings: 'Save $20',
      pricePerSession: '$70/session',
      description: 'Build consistency with weekly training over a month.',
      cta: 'Buy Package',
      popular: false
    },
    {
      name: '10-Session Package',
      price: '$650',
      period: 'total',
      savings: 'Save $100',
      pricePerSession: '$65/session',
      description: 'Best value for serious commitment to your strength journey.',
      cta: 'Buy Package',
      popular: true
    }
  ];

  const sessionIncludes = [
    'Personalized strength training session focused on your goals',
    'Hands-on technique coaching for compound lifts (squat, bench, deadlift)',
    'Program design and progression strategy',
    'Exercise selection based on your biomechanics and injury history',
    'Training log review and next-session planning',
    'Real-time form corrections and coaching cues'
  ];

  const semiPrivate = [
    {
      people: '2 People',
      price: '$50',
      perPerson: 'per person/session',
      packages: '4 sessions: $190/person | 8 sessions: $360/person'
    },
    {
      people: '3 People',
      price: '$40',
      perPerson: 'per person/session',
      packages: '4 sessions: $150/person | 8 sessions: $288/person'
    }
  ];

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/10 rounded-full mb-6">
            <FaDumbbell className="w-10 h-10 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            In-Person Strength Training
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Hands-on strength coaching in the Toledo area. Perfect your squat, bench, and deadlift with expert technique guidance.
          </p>
          <p className="text-yellow-400 font-semibold">📍 Toledo, Ohio</p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Why In-Person Coaching?</h2>
            <ul className="space-y-4">
              {[
                'Real-time form corrections you can feel immediately',
                'Hands-on cueing and positioning adjustments',
                'Learn proper technique from day one',
                'Immediate feedback prevents bad habits',
                'Perfect for beginners who need foundational coaching',
                'Build confidence under the bar with expert guidance'
              ].map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <FaCheck className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg"
              alt="In-person strength training session"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">
            Training Packages
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-gray-900 rounded-xl p-6 border-2 ${
                  pkg.popular ? 'border-yellow-500' : 'border-gray-800'
                } hover:border-yellow-500/50 transition-all relative`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 font-bold px-4 py-1 text-sm">
                    BEST VALUE
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                {pkg.duration && (
                  <p className="text-gray-400 text-sm mb-4">{pkg.duration}</p>
                )}
                
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-yellow-500">{pkg.price}</span>
                  <span className="text-gray-400 ml-2">{pkg.period}</span>
                </div>
                
                {pkg.savings && (
                  <p className="text-yellow-400 font-semibold mb-2">{pkg.savings}</p>
                )}
                {pkg.pricePerSession && (
                  <p className="text-gray-400 text-sm mb-4">{pkg.pricePerSession}</p>
                )}
                
                <p className="text-gray-300 mb-6 text-sm">{pkg.description}</p>
                
                <Link
                  href="/contact?service=in-person"
                  className={`block w-full text-center font-bold py-3 px-6 rounded-lg transition duration-200 ${
                    pkg.popular
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-gray-900/80 rounded-xl p-8 mb-16 border border-yellow-500/20">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">
            What's Included in Every Session
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sessionIncludes.map((item, i) => (
              <div key={i} className="flex items-start">
                <FaCheck className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-black/50 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Session Structure:</h3>
            <div className="space-y-2 text-gray-300">
              <p><span className="text-yellow-400 font-semibold">5 minutes:</span> Check-in and session planning</p>
              <p><span className="text-yellow-400 font-semibold">45 minutes:</span> Coached training with real-time feedback</p>
              <p><span className="text-yellow-400 font-semibold">10 minutes:</span> Cool-down, notes, and next-session preview</p>
            </div>
          </div>
        </div>

        {/* Semi-Private Training */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 mb-16 border border-gray-800">
          <div className="flex items-center justify-center mb-6">
            <FaUsers className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold text-yellow-400">Semi-Private Training</h2>
          </div>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Train with 1-2 partners and split the cost while still getting individual attention and customized programming.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {semiPrivate.map((option, i) => (
              <div key={i} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <p className="text-yellow-400 font-semibold text-lg mb-2">{option.people}</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-white">{option.price}</span>
                  <span className="text-gray-400 text-sm ml-2">{option.perPerson}</span>
                </div>
                <p className="text-gray-400 text-sm">{option.packages}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm text-center mt-6">
            All participants must have similar schedules and compatible goals (all strength-focused)
          </p>
        </div>

        {/* Competition Prep */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-xl p-8 mb-16 border border-yellow-500/20">
          <div className="flex items-center justify-center mb-6">
            <FaTrophy className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold text-yellow-400">Competition Prep Intensive</h2>
          </div>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-4xl font-bold text-white mb-2">$799</p>
              <p className="text-gray-400">8-Week Powerlifting Meet Preparation</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-yellow-400 mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  {[
                    'Complete 8-week meet prep program',
                    '6 strategically-placed in-person sessions',
                    'Weekly online check-ins and adjustments',
                    'Competition lift technique refinement',
                    'Peak week strategy and deload management',
                    'Meet-day attempt selection and handling',
                    'Post-meet analysis and next-cycle planning'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-yellow-400 mb-4">Perfect For:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• First-time meet competitors</li>
                  <li>• Experienced lifters wanting expert meet prep</li>
                  <li>• Those seeking a competitive total on the platform</li>
                </ul>
                
                <div className="mt-6 bg-black/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Timeline:</h4>
                  <div className="space-y-1 text-gray-300 text-sm">
                    <p>Weeks 1-2: Assessment + technique (2 sessions)</p>
                    <p>Weeks 3-6: Intensity build (2 sessions)</p>
                    <p>Week 7: Deload + polish (1 session)</p>
                    <p>Week 8: Meet week + day-of support (1 session)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                href="/contact?service=competition-prep"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-200 shadow-lg"
              >
                Apply for Competition Prep
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">Common Questions</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
          <div className="space-y-4">
            {[
              {
                question: 'Where do sessions take place?',
                answer: 'We\'ll coordinate gym access in the Toledo area. I can work with your gym membership or suggest facilities depending on your location and equipment needs.'
              },
              {
                question: 'What should I bring to my first session?',
                answer: 'Just bring workout clothes, water, and a notebook if you like to take notes. We provide all necessary equipment and guidance.'
              },
              {
                question: 'How often should I train with you?',
                answer: 'Most clients benefit from 1-2 sessions per week to establish proper form and build consistency. The 4-session package works well for weekly training over a month.'
              },
              {
                question: 'I\'m a complete beginner. Is this right for me?',
                answer: 'Absolutely. In-person training is the best way to learn proper barbell technique from the start. We\'ll build your foundation correctly so you can train safely for years.'
              },
              {
                question: 'Can I combine in-person and online coaching?',
                answer: 'Yes! The Hybrid Coaching package ($497/month) includes 2 in-person sessions monthly plus all the benefits of Elite Performance online coaching. Perfect for locals who want the best of both.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/coaching"
              className="text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              ← Back to All Coaching Options
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 md:p-12 text-center border border-yellow-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Limited in-person training slots available in Toledo. Book your first session today.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/contact?service=in-person" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Book In-Person Training
            </Link>
            <Link 
              href="/contact?service=consultation" 
              className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-4 px-8 rounded-lg transition duration-200"
            >
              Schedule Free Consultation
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Not sure which option is right for you? Let's talk.
          </p>
        </div>
      </div>
    </div>
  );
}
