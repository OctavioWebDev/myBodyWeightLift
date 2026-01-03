'use client'
import React from 'react'
import Link from 'next/link'
import { FaCheck, FaTimes, FaDumbbell, FaChartLine } from 'react-icons/fa'

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Training Philosophy
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The &quot;Shut Up and Lift&quot; methodology: Simple, effective strength training 
            without the industry garbage.
          </p>
        </div>

        {/* Core Principle */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-xl p-8 md:p-12 border border-yellow-500/20 mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            The Core Principle
          </h2>
          <div className="bg-black/30 p-8 rounded-lg border-l-4 border-yellow-500">
            <p className="text-2xl text-white font-semibold mb-4 text-center">
              Progressive Overload Is Everything
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Getting stronger means one thing: lifting more weight over time. Not &quot;muscle 
              confusion.&quot; Not &quot;feeling the burn.&quot; Not switching programs every 6 weeks. 
              Just consistently adding weight to the bar on the fundamental movements.
            </p>
          </div>
        </div>

        {/* The Three Pillars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
            The Three Pillars
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mr-4 border border-yellow-500/30">
                  <span className="text-2xl font-bold text-yellow-500">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Simplicity</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Three exercises form the foundation: squat, bench press, and deadlift. These 
                    compound movements work the entire body and allow for the heaviest loads.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    You don&apos;t need 17 exercises. You don&apos;t need complex exercise 
                    selection. Master the basics first. Everything else is noise.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mr-4 border border-yellow-500/30">
                  <span className="text-2xl font-bold text-yellow-500">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Progressive Overload</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Every training session, you try to do more than last time. Add weight to the 
                    bar. Add a rep. Add a set. Progress is measured in numbers, not feelings.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    For beginners: Add 5 lbs to the bar every session you complete all your reps. 
                    It&apos;s that simple. No complicated periodization needed yet.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mr-4 border border-yellow-500/30">
                  <span className="text-2xl font-bold text-yellow-500">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Consistency</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Three days per week. Every week. For months and years. The program that you 
                    actually do consistently will always beat the &quot;perfect&quot; program you do 
                    sporadically.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Miss a workout? Pick up where you left off. Don&apos;t restart the program. 
                    Don&apos;t switch to a new program. Just keep going.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Basic Template */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-800 mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
            The Basic Template
          </h2>
          <p className="text-gray-300 text-center mb-8">
            This is the foundation of the &quot;Shut Up and Lift&quot; methodology:
          </p>
          
          <div className="bg-black/30 p-6 rounded-lg border border-yellow-500/30 mb-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">
              3 Days Per Week Template
            </h3>
            
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">Day A:</p>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• Squat: 3 sets x 5 reps</li>
                  <li>• Bench Press: 3 sets x 5 reps</li>
                  <li>• Deadlift: 1 set x 5 reps</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">Day B:</p>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• Squat: 3 sets x 5 reps</li>
                  <li>• Overhead Press: 3 sets x 5 reps</li>
                  <li>• Deadlift: 1 set x 5 reps</li>
                </ul>
              </div>

              <div className="text-center text-gray-400 text-sm">
                Alternate A and B each training day: A, B, A, B, A, B...
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
            <h4 className="text-yellow-400 font-bold mb-3 text-center">Progression:</h4>
            <p className="text-gray-300 text-center">
              When you complete all sets and reps with good form, add 5 lbs to the bar next session. 
              That&apos;s it. No overthinking required.
            </p>
          </div>
        </div>

        {/* What This Isn't */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
            What This Philosophy Is NOT
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
              <div className="flex items-center mb-4">
                <FaTimes className="text-red-500 w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold text-white">Not Bodybuilding</h3>
              </div>
              <p className="text-gray-300 text-sm">
                We&apos;re focused on strength, not hypertrophy splits or muscle isolation. 
                Building strength builds muscle, but that&apos;s not the primary goal.
              </p>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
              <div className="flex items-center mb-4">
                <FaTimes className="text-red-500 w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold text-white">Not Powerlifting (Yet)</h3>
              </div>
              <p className="text-gray-300 text-sm">
                This is beginner programming. Elite powerlifters need advanced periodization. 
                Beginners need simple linear progression.
              </p>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
              <div className="flex items-center mb-4">
                <FaTimes className="text-red-500 w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold text-white">Not Functional Fitness</h3>
              </div>
              <p className="text-gray-300 text-sm">
                We don&apos;t do box jumps, battle ropes, or constantly varied workouts. 
                Getting strong IS functional. Everything else is accessory.
              </p>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
              <div className="flex items-center mb-4">
                <FaTimes className="text-red-500 w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold text-white">Not &quot;Optimal&quot;</h3>
              </div>
              <p className="text-gray-300 text-sm">
                There&apos;s no perfect program. The optimal program is the one you&apos;ll 
                actually follow for years. That&apos;s this one.
              </p>
            </div>
          </div>
        </div>

        {/* Why It Works */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-800 mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
            Why This Works
          </h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-white mb-3">
                <FaCheck className="inline text-yellow-500 mr-2" />
                It&apos;s Actually Simple
              </h3>
              <p className="text-gray-300">
                No decision fatigue. No analysis paralysis. You know exactly what to do every 
                training session. Show up, lift, add weight. Repeat.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-white mb-3">
                <FaCheck className="inline text-yellow-500 mr-2" />
                It&apos;s Based on Fundamentals
              </h3>
              <p className="text-gray-300">
                Squat, bench, and deadlift are proven strength builders. They&apos;ve worked for 
                decades. They&apos;ll work for decades more. No gimmicks needed.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-white mb-3">
                <FaCheck className="inline text-yellow-500 mr-2" />
                It&apos;s Sustainable
              </h3>
              <p className="text-gray-300">
                Three days a week fits into real life. You can train consistently for years 
                without burning out. Sustainability beats intensity every time.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-white mb-3">
                <FaCheck className="inline text-yellow-500 mr-2" />
                It&apos;s Measurable
              </h3>
              <p className="text-gray-300">
                Progress is objective. Did you add weight to the bar? Yes or no. No subjective 
                &quot;feeling stronger&quot; nonsense. Numbers don&apos;t lie.
              </p>
            </div>
          </div>
        </div>

        {/* When You Need More */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 md:p-12 border border-yellow-500/20 mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            When You Outgrow Linear Progression
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 leading-relaxed mb-4">
              Eventually, you can&apos;t add weight every session anymore. That&apos;s normal. 
              You&apos;re no longer a beginner—you&apos;re an intermediate lifter.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              At this point, you need:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start">
                <FaDumbbell className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                Weekly or monthly progression instead of session-to-session
              </li>
              <li className="flex items-start">
                <FaDumbbell className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                Periodization (alternating volume and intensity phases)
              </li>
              <li className="flex items-start">
                <FaDumbbell className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                More sophisticated programming
              </li>
              <li className="flex items-start">
                <FaDumbbell className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                Strategic deload weeks
              </li>
            </ul>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 text-center">
              <p className="text-white mb-4">
                <strong className="text-yellow-400">That&apos;s where coaching comes in.</strong> I can program 
                for intermediate and advanced lifters too. But milk the beginner gains first.
              </p>
              <Link
                href="/coaching"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-200"
              >
                Learn About Coaching
              </Link>
            </div>
          </div>
        </div>

        {/* Common Objections */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-800 mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
            Common Objections
          </h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                &quot;Only 3 exercises? That&apos;s not enough!&quot;
              </h3>
              <p className="text-gray-300">
                For beginners? It&apos;s more than enough. These three movements work your entire 
                body. Adding more exercises just dilutes your focus and recovery. Master these 
                first, then worry about accessories.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                &quot;What about arms/abs/calves?&quot;
              </h3>
              <p className="text-gray-300">
                Squats and deadlifts work your core harder than any ab exercise. Your arms grow 
                from pressing movements. If you must add accessories, do it after your main work. 
                But they&apos;re not required for beginners.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                &quot;3 days per week isn&apos;t enough volume!&quot;
              </h3>
              <p className="text-gray-300">
                For beginners adding weight every session? It&apos;s plenty. More volume doesn&apos;t 
                mean more progress. It often means less recovery. Train hard three days, recover 
                the other four. That&apos;s the formula.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                &quot;This seems too simple to work.&quot;
              </h3>
              <p className="text-gray-300">
                That&apos;s exactly the problem with the fitness industry. They&apos;ve convinced 
                you that complicated = effective. The truth? Simple works better because you&apos;ll 
                actually stick with it. Try it for 3 months and see.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 md:p-12 text-center border border-yellow-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Stop Overcomplicating Training?
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the book to learn the full methodology, or work with me directly for personalized 
            programming and coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Read the Book
            </Link>
            <Link
              href="/coaching"
              className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-4 px-8 rounded-lg transition duration-200"
            >
              Get Coaching
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}