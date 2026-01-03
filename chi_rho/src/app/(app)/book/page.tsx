'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaAmazon, FaCheck, FaStar } from 'react-icons/fa'

export default function BookPage() {
  const whatYouLearn = [
    'The only three exercises you need to build serious strength',
    'How to add weight to the bar consistently (progressive overload explained)',
    'Proper form for squat, bench press, and deadlift',
    'How to design a simple 3-day training schedule that works',
    'When to add weight, when to deload, and how to track progress',
    'Common beginner mistakes and how to avoid them',
    'Why most programs overcomplicate strength training'
  ]

  const whoItsFor = [
    {
      title: 'Complete Beginners',
      description: 'Never touched a barbell? This book breaks down exactly what to do, step by step.'
    },
    {
      title: 'Frustrated Lifters',
      description: 'Been training but not getting stronger? Learn why and how to fix it.'
    },
    {
      title: 'Program Hoppers',
      description: 'Tired of switching programs every month? Get a system that actually works.'
    },
    {
      title: 'Overthinkers',
      description: 'Paralyzed by too much information? This book cuts through the noise.'
    }
  ]

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
            Shut Up and Lift
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl text-white mb-4">
            A No-Nonsense Guide to Getting Strong
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stop overthinking. Stop program hopping. Start getting stronger.
          </p>
        </div>

        {/* Book Cover + Quick Pitch */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center">
            <div className="relative w-80 h-96 bg-gray-800 rounded-xl overflow-hidden shadow-2xl border-4 border-yellow-500/30 flex items-center justify-center">
              <p className="text-gray-400 text-center px-4">Book Cover Image<br />Coming Soon</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              The Book I Wish I Had When I Started
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I wasted years chasing complicated programs, switching routines every few months, 
              and overthinking every detail. This book is what I learned the hard way: 
              <strong className="text-yellow-400"> getting strong is simple, not easy.</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Three exercises. Three days a week. Add weight consistently. That&apos;s it. No BS. 
              No gimmicks. No &quot;secret techniques.&quot; Just what actually works for beginners.
            </p>

            <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg p-6">
              <p className="text-yellow-400 font-bold text-xl mb-2">Special Offer:</p>
              <p className="text-white text-lg">
                Buy the book and get <strong className="text-yellow-400">15% off</strong> your 
                first month of coaching. Just show proof of purchase when you apply.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://amazon.com/your-book-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition duration-200 text-center shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center"
              >
                <FaAmazon className="mr-2 text-2xl" />
                Buy on Amazon
              </a>
              <Link
                href="/coaching"
                className="flex-1 bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-4 px-8 rounded-lg transition duration-200 text-center"
              >
                Get Coaching Instead
              </Link>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-800 mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
            What You&apos;ll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whatYouLearn.map((item, index) => (
              <div key={index} className="flex items-start">
                <FaCheck className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who It's For */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
            Who This Book Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whoItsFor.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-yellow-500/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Philosophy */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-xl p-8 md:p-12 border border-yellow-500/20 mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            The &quot;Shut Up and Lift&quot; Philosophy
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-black/30 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-white mb-3">1. Simple Beats Complex</h3>
              <p className="text-gray-300">
                The fitness industry profits from complexity. The truth? Three exercises done 
                consistently build more strength than 30 exercises done sporadically.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-white mb-3">2. Progressive Overload Is Everything</h3>
              <p className="text-gray-300">
                Getting stronger means lifting heavier weight over time. Not &quot;feeling the burn.&quot; 
                Not &quot;confusing the muscles.&quot; Just consistently adding weight to the bar.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-white mb-3">3. Consistency Trumps Everything</h3>
              <p className="text-gray-300">
                The perfect program you do inconsistently is worthless. The simple program you do 
                consistently for years will transform you.
              </p>
            </div>
          </div>
        </div>

        {/* Sample Chapter / Preview */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-800 mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Inside the Book
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-black/30 p-8 rounded-lg border border-gray-700 mb-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Chapter 1: Why Most Programs Fail</h3>
              <p className="text-gray-300 leading-relaxed mb-4 italic">
                &quot;You don&apos;t need 17 different exercises. You don&apos;t need perfect exercise selection. 
                You don&apos;t need optimal rep ranges or scientifically-proven rest periods. You need 
                three things: a barbell, progressive overload, and consistency.&quot;
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                This chapter breaks down why beginners get overwhelmed and quit. Too many options. 
                Too much conflicting advice. Too much focus on details that don&apos;t matter yet.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The solution? Strip everything down to what actually matters: getting stronger on 
                the squat, bench press, and deadlift.
              </p>
            </div>

            <div className="text-center">
  <p className="text-gray-400 mb-4">Read Chapter 1 and decide if this approach is for you.</p>
  
  <a
    href="/downloads/shut-up-and-lift-sample-chapter.pdf"
    download="Shut-Up-and-Lift-Sample-Chapter.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-gray-800 hover:bg-gray-700 text-yellow-400 font-bold py-3 px-8 rounded-lg transition duration-200"
  >
    Download Sample Chapter (PDF)
  </a>
</div>
          </div>
        </div>

        {/* Reviews Section */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
            What Readers Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                rating: 5,
                text: "Finally, a book that doesn't overcomplicate things. Started the program and added 50 lbs to my squat in 3 months.",
                author: "Mike T."
              },
              {
                rating: 5,
                text: "Wish I'd found this years ago. Wasted so much time on complicated programs that didn't work.",
                author: "Sarah K."
              },
              {
                rating: 5,
                text: "No fluff, no noise. Just what works. Exactly what I needed as a beginner.",
                author: "James R."
              }
            ].map((review, index) => (
              <div
                key={index}
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&quot;{review.text}&quot;</p>
                <p className="text-yellow-400 font-semibold">- {review.author}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Book vs Coaching */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-800 mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
            Book vs. Coaching: Which Is Right for You?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/30 p-6 rounded-lg border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Get the Book If:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaCheck className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  You&apos;re self-motivated and can execute on your own
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  You want to learn the methodology and program for yourself
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  You&apos;re on a tight budget
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  You want to try the approach before committing to coaching
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-white font-semibold mb-2">Price: $15-20</p>
                <a
                  href="https://amazon.com/your-book-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-200 text-center"
                >
                  Buy the Book
                </a>
              </div>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Get Coaching If:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaCheck className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  You want customized programming for your situation
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  You need form checks and technique feedback
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  You want accountability and regular check-ins
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  You&apos;re serious about getting stronger and want expert guidance
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-white font-semibold mb-2">Starting at: $97/month</p>
                <Link
                  href="/coaching"
                  className="block w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-200 text-center"
                >
                  View Coaching Options
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-yellow-400 font-bold text-lg mb-2">💡 Pro Tip:</p>
              <p className="text-white">
                Buy the book first. If you love the approach and want personalized coaching, 
                you&apos;ll get 15% off your first month. No risk, maximum value.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 md:p-12 text-center border border-yellow-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Stop Overthinking?
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the book. Learn the system. Start getting stronger today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a
              href="https://amazon.com/your-book-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition duration-200 text-center shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center"
            >
              <FaAmazon className="mr-2 text-2xl" />
              Buy on Amazon
            </a>
            <Link
              href="/coaching"
              className="flex-1 bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-4 px-8 rounded-lg transition duration-200 text-center"
            >
              Or Get Coaching
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Remember: Book buyers get 15% off coaching. Show proof of purchase when you apply.
          </p>
        </div>
    </div>
  </div>
  )
}