'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function OnlineCoaching() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">Online Coaching</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional fitness coaching from anywhere in the world, tailored to your schedule and goals.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl order-last md:order-first">
            <Image
              src="/assets/images/online-coaching.jpg"
              alt="Online coaching session"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Online Coaching?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">Work out anytime, anywhere with flexible scheduling</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-200">Personalized workout plans in your pocket</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-200">Regular check-ins and progress tracking</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-200">No equipment? No problem - we'll work with what you have</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link 
                href="/contact?service=online" 
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Start Your Online Coaching Journey
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-900/80 rounded-xl shadow-xl p-8 mb-16 border border-yellow-500/20">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">What's Included</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '📱',
                title: 'Mobile App Access',
                description: 'Track your workouts, nutrition, and progress all in one place.'
              },
              {
                icon: '🎥',
                title: 'Video Calls',
                description: 'Regular video check-ins with your coach for form checks and adjustments.'
              },
              {
                icon: '📝',
                title: 'Custom Plans',
                description: 'Workout and nutrition plans tailored to your equipment and preferences.'
              },
              {
                icon: '💬',
                title: '24/7 Support',
                description: 'Direct messaging with your coach for questions and support.'
              },
              {
                icon: '📊',
                title: 'Progress Tracking',
                description: 'Monitor your improvements with detailed analytics and feedback.'
              },
              {
                icon: '🔄',
                title: 'Ongoing Adjustments',
                description: 'Your plan evolves as you do, with regular updates based on your progress.'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800/80 transition-colors border border-gray-800 hover:border-yellow-500/30">
                <div className="text-4xl mb-4 text-yellow-400">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">Success Stories</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "The online coaching program completely transformed my fitness routine. I've never been more consistent!",
                author: "Sarah M.",
                role: "Online Coaching Client"
              },
              {
                quote: "I was skeptical about online training, but the personalized attention I received was incredible. Best decision ever!",
                author: "James T.",
                role: "6-Month Client"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900/50 p-8 rounded-xl shadow-lg border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
                <div className="text-yellow-500 text-4xl mb-4">"</div>
                <p className="text-gray-200 italic mb-6">{testimonial.quote}</p>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
