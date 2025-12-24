'use client'
import React from 'react'
import Image from 'next/image'

export default function MyStory() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">My Name Is Octavio Sanchez</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-500/30">
                <Image
                  src="/assets/images/octavio-profile.jpg"
                  alt="Octavio Sanchez"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-2">Web Developer & Family Man</h2>
                <p className="text-yellow-400">Toledo, Ohio</p>
              </div>
            </div>

            <div className="space-y-6">
              <Section title="My Journey">
                <p className="text-gray-300 leading-relaxed text-justify">
                  A dedicated front-end web developer and software engineer based in Toledo, Ohio. 
                  My journey into the world of technology and personal growth is deeply intertwined 
                  with my life's experiences.
                </p>
              </Section>

              <Section title="Early Life">
                <p className="text-gray-300 leading-relaxed text-justify">
                  Growing up on the eastside of Toledo, Ohio, I faced many challenges and changes. 
                  My great-grandmother took custody of me when I was 2, and I was adopted at 9. 
                  Though my great-grandmother and her boyfriend did their best to raise me, 
                  I lacked a strong father figure in my life. By the age of 14, I was on my own 
                  due to my rebellious nature.
                </p>
              </Section>

              <Section title="A Turning Point">
                <p className="text-gray-300 leading-relaxed text-justify">
                  At 19, I was living a life of excess, but everything changed when I moved to 
                  Louisiana at 20. There, I met my future wife and her daughter, who would 
                  eventually call me 'Dad'. That moment was a wake-up call - I realized I needed 
                  to become someone worthy of that title. I turned to my faith, praying for guidance 
                  on how to be a better man and father.
                </p>
              </Section>

              <Section title="Family & Faith">
                <p className="text-gray-300 leading-relaxed text-justify">
                  Through faith and perseverance, my life transformed. Today, I'm blessed with a 
                  wonderful marriage and nine beautiful children. While I'm far from perfect, I'm 
                  grateful for the positive changes God has brought into my life.
                </p>
              </Section>

              <Section title="Professional Journey">
                <p className="text-gray-300 leading-relaxed mb-4">
                  With over eight years in logistics and warehouse management, I've developed a 
                  strong foundation in operations and problem-solving. I've channeled these skills 
                  into my passion for technology, specializing in:
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'TypeScript', 'Next.js'].map((skill) => (
                    <span key={skill} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </Section>

              <Section title="Chi Rho Power and Strength">
                <p className="text-gray-300 leading-relaxed text-justify">
                  I'm building Chi Rho Power and Strength - a lifestyle brand that embodies the values 
                  of discipline, growth, and faith. Through this platform and my work, I aim to inspire 
                  others to overcome their challenges and reach their full potential.
                </p>
              </Section>

              <div className="text-center mt-12 p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
                <p className="text-yellow-400 italic text-lg">
                  "The only limit to our realization of tomorrow will be our doubts of today." 
                  <span className="block mt-2 text-white">- Franklin D. Roosevelt</span>
                </p>
              </div>
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
