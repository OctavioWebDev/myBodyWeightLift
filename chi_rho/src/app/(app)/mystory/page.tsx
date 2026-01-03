'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MyStory() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            I'm Not Special. I Just Stopped Overthinking.
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            How I learned what actually builds strength (the hard way)
          </p>
        </div>

        <div className="space-y-8">
          {/* Hero Image Section */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-500/30 flex-shrink-0">
                <Image
                  src="/assets/images/MyNewHeadShot.JPG"
                  alt="Octavio Sanchez"
                  fill
                  sizes="(max-width: 768px) 192px, 192px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-2">Octavio Sanchez</h2>
                <p className="text-yellow-400 mb-2">Author of "Shut Up and Lift"</p>
                <p className="text-gray-400 text-sm">
                  Strength Coach | 10+ Years Training Experience
                </p>
              </div>
            </div>
          </div>

          {/* The Real Story */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-xl">
            <Section title="Here's the Truth">
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm not a former college athlete. I don't have a physique Instagram account. I wasn't 
                born with exceptional genetics. I'm just someone who's been training consistently for 
                over 10 years and figured out what actually works.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I have a background in information technology, wrote a book on strength training, and 
                learned through trial and error what builds real strength for real people.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-yellow-400">That's why I can help you.</strong> Not because I'm 
                genetically gifted or because training is easy for me. But because I've made every 
                mistake you're about to make, and I learned the hard way what actually works.
              </p>
            </Section>
          </div>

          {/* The Mistakes Section */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/20 shadow-xl">
            <Section title="Every Mistake You Can Make? I Made It.">
              <div className="space-y-4">
                <div className="bg-black/30 p-4 rounded-lg border-l-4 border-red-500/50">
                  <p className="text-gray-300">
                    <strong className="text-red-400">Program hopping:</strong> I switched programs every 
                    6-8 weeks thinking "this one will be the secret." Wasted a year spinning my wheels.
                  </p>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg border-l-4 border-red-500/50">
                  <p className="text-gray-300">
                    <strong className="text-red-400">Overthinking everything:</strong> Worried about tempo, 
                    rest periods, exercise selection, optimal rep ranges. Paralysis by analysis.
                  </p>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg border-l-4 border-red-500/50">
                  <p className="text-gray-300">
                    <strong className="text-red-400">Chasing the pump:</strong> Did tons of volume and 
                    accessory work instead of just getting stronger on the main lifts.
                  </p>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg border-l-4 border-red-500/50">
                  <p className="text-gray-300">
                    <strong className="text-red-400">Ignoring progressive overload:</strong> Kept doing 
                    the same weights for months, wondering why I wasn't getting stronger.
                  </p>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg border-l-4 border-red-500/50">
                  <p className="text-gray-300">
                    <strong className="text-red-400">Believing the hype:</strong> Wasted money on 
                    supplements, special programs, and "optimal" training splits that didn't matter.
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mt-6">
                Sound familiar? That's because the fitness industry profits from complexity. The more 
                confused you are, the more products they can sell you.
              </p>
            </Section>
          </div>

          {/* The Breakthrough */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-xl">
            <Section title="What Changed Everything">
              <p className="text-gray-300 leading-relaxed mb-4">
                About 5 years ago, I stopped trying to be clever. I picked three exercises: squat, overhead press,  
                  and deadlift. I trained three days a week. I added weight to the bar every time I 
                could. That's it.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                No fancy periodization. No special techniques. No secret exercises. Just consistent, 
                progressive overload on the basics.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-yellow-400">And it worked.</strong> Better than any complicated 
                program I'd ever followed. Better than any "optimal" training split. Better than all 
                the nonsense the industry had been selling me.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mt-6">
                <p className="text-yellow-400 font-semibold mb-2">The Simple Truth:</p>
                <p className="text-gray-300">
                  Getting stronger is not complicated. You don't need special genetics. You don't need 
                  perfect conditions. You need consistency, progressive overload, and someone to keep you 
                  from overthinking it.
                </p>
              </div>
            </Section>
          </div>

          {/* Why I Wrote the Book */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-xl">
            <Section title="Why I Wrote 'Shut Up and Lift'">
              <p className="text-gray-300 leading-relaxed mb-4">
                I got tired of watching beginners make the same mistakes I made. I got tired of seeing 
                people quit because they were overwhelmed by conflicting advice. I got tired of the 
                fitness industry selling complexity when simplicity works better.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                So I wrote a book that cuts through all the BS. It's the book I wish I'd had when I 
                started. No fluff. No pseudoscience. Just what actually works for beginners who want to 
                get strong.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Three exercises. Three days a week. Add weight consistently. That's the entire system. 
                If you can follow that, you can get strong.
              </p>
            </Section>
          </div>

          {/* Why I Coach */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-xl">
            <Section title="Why I Coach">
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-yellow-400">I'm not here to sell you dreams.</strong> I'm not 
                going to tell you that training is easy or that you'll transform your body in 90 days. 
                I'm going to tell you the truth: getting strong takes time, consistency, and progressive 
                overload.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                But I can help you avoid the mistakes I made. I can keep you from program hopping. I can 
                stop you from overthinking. I can give you accountability and expertise so you actually 
                make progress instead of spinning your wheels.
              </p>
              <div className="bg-black/30 p-6 rounded-lg border border-yellow-500/30 mt-6">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-yellow-400">My coaching philosophy is simple:</strong> Cut 
                  through the BS. Focus on what works. Train consistently. Get stronger. No gimmicks. 
                  No secrets. No complicated periodization schemes you don't need yet.
                </p>
              </div>
            </Section>
          </div>

          {/* What Makes My Approach Different */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-xl p-8 border border-yellow-500/20 shadow-xl">
            <Section title="What Makes My Approach Different">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-3">What I Don't Do:</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Sell you supplements or special equipment</li>
                    <li>• Promise overnight transformations</li>
                    <li>• Overcomplicate programming unnecessarily</li>
                    <li>• Encourage program hopping</li>
                    <li>• Push trendy training methods</li>
                    <li>• Make you feel inferior for being a beginner</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-3">What I Do:</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Give you honest, straightforward coaching</li>
                    <li>• Teach progressive overload fundamentals</li>
                    <li>• Focus on compound movements that work</li>
                    <li>• Keep programming simple and effective</li>
                    <li>• Provide accountability and feedback</li>
                    <li>• Help you build long-term strength</li>
                  </ul>
                </div>
              </div>
            </Section>
          </div>

          {/* Credentials Section */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-xl">
            <Section title="Background & Experience">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3"></div>
                  <div>
                    <p className="text-white font-semibold">10+ Years Consistent Training</p>
                    <p className="text-gray-400 text-sm">Real-world experience with progressive overload and strength development</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3"></div>
                  <div>
                    <p className="text-white font-semibold">Published Author</p>
                    <p className="text-gray-400 text-sm">"Shut Up and Lift: A No-Nonsense Guide to Getting Strong" - Available on Amazon</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3"></div>
                  <div>
                    <p className="text-white font-semibold">BS in Information Technology Management</p>
                    <p className="text-gray-400 text-sm">Western Governors University, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3"></div>
                  <div>
                    <p className="text-white font-semibold">Evidence-Based Approach</p>
                    <p className="text-gray-400 text-sm">Focused on what research and real-world experience prove works</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3"></div>
                  <div>
                    <p className="text-white font-semibold">Beginner-Focused</p>
                    <p className="text-gray-400 text-sm">Specialized in helping people avoid common mistakes and build solid foundations</p>
                  </div>
                </div>
              </div>
            </Section>
          </div>

          {/* Bottom Line */}
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-yellow-500/20 shadow-xl">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4 text-center">The Bottom Line</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-300 leading-relaxed text-center mb-6 max-w-2xl mx-auto">
              I'm not selling you a dream body or a fitness transformation. I'm offering you honest 
              coaching from someone who's made every mistake in the book and learned what actually 
              builds strength.
            </p>
            <p className="text-xl text-yellow-400 text-center font-semibold mb-8">
              If you want simple, effective strength training without the BS, I can help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/coaching"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition duration-200 text-center shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                View Coaching Options
              </Link>
              <Link 
                href="/book"
                className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-4 px-8 rounded-lg transition duration-200 text-center"
              >
                Read the Book First
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-yellow-400 border-b border-yellow-500/30 pb-2 flex items-center">
        <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
        {title}
      </h2>
      {children}
    </div>
  )
}