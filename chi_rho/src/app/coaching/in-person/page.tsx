'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function InPersonCoaching() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">In-Person Coaching</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get personalized, one-on-one training tailored to your fitness goals with our expert coaches.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Why Choose In-Person Coaching?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-200">Personalized workout plans designed specifically for you</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-200">Immediate feedback on your form and technique</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-200">Accountability and motivation from your coach</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-200">Access to premium equipment and facilities</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link 
                href="/contact?service=in-person" 
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started with In-Person Coaching
              </Link>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/assets/images/in-person-training.jpg"
              alt="In-person personal training session"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 mb-16 border border-gray-700">
          <h2 className="text-3xl font-bold text-center text-white mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: 'Initial Consultation',
                description: 'We\'ll discuss your goals, fitness level, and any concerns to create a personalized plan.'
              },
              {
                number: '2',
                title: 'Customized Training',
                description: 'Your coach will design workouts tailored to your specific needs and goals.'
              },
              {
                number: '3',
                title: 'Ongoing Support',
                description: 'Regular check-ins and adjustments to keep you on track and seeing results.'
              }
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-2xl font-bold text-blue-400 mx-auto mb-4 border border-blue-400/30">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: 'How often should I train with a coach?',
                answer: 'We recommend starting with 2-3 sessions per week to establish proper form and build consistency.'
              },
              {
                question: 'What should I bring to my first session?',
                answer: 'Just bring yourself, a water bottle, and workout clothes. We provide all necessary equipment.'
              },
              {
                question: 'How long are the training sessions?',
                answer: 'Sessions typically last 60 minutes, but we can adjust based on your schedule and needs.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
