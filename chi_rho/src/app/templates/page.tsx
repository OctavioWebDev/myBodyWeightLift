'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const paidTemplates = [
  {
    id: 'beginner-strength-2day',
    title: 'Foundational Strength (2-Day)',
    description: 'Perfect for those new to strength training, focusing on mastering fundamental movements with linear progression.',
    price: 5.00,
    image: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg',
    category: 'Strength',
    duration: '12 weeks',
    level: 'Beginner',
    frequency: '2 days/week',
    focus: 'Movement patterns, technique, and building consistency',
  },
  {
    id: 'beginner-strength-3day',
    title: 'Foundational Strength (3-Day)',
    description: 'Build a solid strength base with this 3-day full body program, perfect for beginners ready to commit to regular training.',
    price: 5.00,
    image: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg',
    category: 'Strength',
    duration: '12 weeks',
    level: 'Beginner',
    frequency: '3 days/week',
    focus: 'Progressive overload, movement mastery',
  },
  {
    id: 'intermediate-hypertrophy-3day',
    title: 'Hypertrophy & Strength (3-Day)',
    description: 'For lifters with 6+ months of experience looking to build muscle and increase strength with proper periodization.',
    price: 5.00,
    image: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg',
    category: 'Hypertrophy',
    duration: '8 weeks',
    level: 'Intermediate',
    frequency: '3 days/week',
    focus: 'Muscle growth, strength development',
  },
  {
    id: 'intermediate-hypertrophy-4day',
    title: 'Hypertrophy & Strength (4-Day)',
    description: 'Higher volume split for intermediates ready to take their training to the next level with increased frequency.',
    price: 5.00,
    image: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg',
    category: 'Hypertrophy',
    duration: '8 weeks',
    level: 'Intermediate',
    frequency: '4 days/week',
    focus: 'Progressive overload, exercise variations',
  },
  {
    id: 'advanced-powerlifting-3day',
    title: 'Powerlifting Program (3-Day)',
    description: 'For advanced lifters focusing on the big three lifts with intelligent programming for competition prep.',
    price: 5.00,
    image: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg',
    category: 'Powerlifting',
    duration: '12 weeks',
    level: 'Advanced',
    frequency: '3 days/week',
    focus: 'Peaking, competition prep',
  },
  {
    id: 'advanced-powerlifting-4day',
    title: 'Powerlifting Program (4-Day)',
    description: 'High-volume powerlifting program for advanced athletes with proper recovery capacity and training age.',
    price: 5.00,
    image: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg',
    category: 'Powerlifting',
    duration: '12 weeks',
    level: 'Advanced',
    frequency: '4 days/week',
    focus: 'Strength development, accessory work',
  },
]

// const freeResources = [
//   {
//     id: 'beginner-strength-guide',
//     title: 'Beginner Strength Training Guide',
//     description: 'Complete guide to starting strength training with proper form, programming basics, and common mistakes to avoid.',
//     image: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg',
//     category: 'Education',
//     level: 'Beginner',
//     format: 'PDF',
//     pages: '25 pages',
//   },
//   {
//     id: 'linear-progression-template',
//     title: '12-Week Linear Progression Template',
//     description: 'Simple 3-day training template based on the "Shut Up and Lift" methodology. Perfect for beginners.',
//     image: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg',
//     category: 'Template',
//     level: 'Beginner',
//     format: 'Excel + PDF',
//     pages: 'Spreadsheet',
//   },
//   {
//     id: 'form-checklist',
//     title: 'Big Three Form Checklist',
//     description: 'Detailed form cues and common errors for squat, bench press, and deadlift. Reference this before every workout.',
//     image: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg',
//     category: 'Reference',
//     level: 'All Levels',
//     format: 'PDF',
//     pages: '12 pages',
//   },
//   {
//     id: 'progressive-overload-explained',
//     title: 'Progressive Overload Explained',
//     description: 'Deep dive into the only principle that matters for building strength. Includes practical application examples.',
//     image: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg',
//     category: 'Education',
//     level: 'All Levels',
//     format: 'PDF',
//     pages: '15 pages',
//   },
//   {
//     id: 'training-log-template',
//     title: 'Printable Training Log',
//     description: 'Simple, effective training log to track your workouts and progress over time. No app required.',
//     image: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg',
//     category: 'Tool',
//     level: 'All Levels',
//     format: 'PDF',
//     pages: 'Printable',
//   },
//   {
//     id: 'program-selection-guide',
//     title: 'How to Choose a Strength Program',
//     description: 'Stop program hopping. Learn how to evaluate programs and pick the right one for your experience level.',
//     image: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg',
//     category: 'Education',
//     level: 'All Levels',
//     format: 'PDF',
//     pages: '18 pages',
//   },
// ]

export default function TemplatesPage() {
  const [email, setEmail] = useState('')
  const [selectedResource, setSelectedResource] = useState<string | null>(null)
  const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleDownload = (resourceId: string) => {
    setSelectedResource(resourceId)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      // TODO: Integrate with email service (Mailchimp, ConvertKit, etc.)
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000))

      setStatus({
        message: 'Success! Check your email for the download link.',
        isError: false
      })
      
      setEmail('')
      setSelectedResource(null)
      
    } catch (error) {
      setStatus({
        message: 'Something went wrong. Please try again.',
        isError: true
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Training Templates</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Professional training programs and free resources to help you build strength without the gimmicks.
          </p>
        </div>

        {/* Status Message */}
        {status && (
          <div className={`max-w-2xl mx-auto mb-8 p-4 rounded-lg ${
            status.isError 
              ? 'bg-red-900/20 border border-red-500/30 text-red-400'
              : 'bg-yellow-500/10 border border-yellow-500/30 text-yellow-400'
          }`}>
            {status.message}
          </div>
        )}

        {/* Free Resources Section */}
        {/* <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-2">Free Resources</h2>
              <p className="text-gray-400">Get instant access - just enter your email</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500/30 transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    FREE
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                    <span className="text-xs bg-gray-800 text-yellow-400 px-2 py-1 rounded flex-shrink-0 ml-2">
                      {resource.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                      {resource.category}
                    </span>
                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                      {resource.format}
                    </span>
                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                      {resource.pages}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => handleDownload(resource.id)}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    Get Free Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Divider */}
        <div className="border-t border-gray-800 my-16"></div>

        {/* Premium Templates Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-2">Premium Training Programs</h2>
              <p className="text-gray-400">Complete 8-12 week programs with detailed progressions</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paidTemplates.map((template) => (
              <div 
                key={template.id} 
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500/30 transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                    ${template.price.toFixed(2)}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{template.title}</h3>
                    <span className="text-xs bg-gray-800 text-yellow-400 px-2 py-1 rounded flex-shrink-0 ml-2">
                      {template.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {template.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                      {template.category}
                    </span>
                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                      {template.duration}
                    </span>
                    <span className="text-xs bg-gray-800 text-yellow-400 px-2 py-1 rounded">
                      {template.frequency}
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-400 mb-4">
                    <span className="font-semibold text-yellow-400">Focus:</span> {template.focus}
                  </p>
                  
                  <Link 
                    href={`/templates/${template.id}`}
                    className="block w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-lg text-center transition-colors duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Email Capture Modal */}
        {selectedResource && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full border border-gray-800">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                  Get Your Free Download
                </h2>
                <p className="text-gray-300 text-sm">
                  Enter your email and we&apos;ll send you the download link immediately.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedResource(null)}
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Download'}
                  </button>
                </div>

                <p className="text-xs text-gray-400 text-center">
                  By downloading, you agree to receive occasional emails about strength training. 
                  Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        )}

        {/* Why Free Section */}
        {/* <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-xl p-8 md:p-12 border border-yellow-500/20 mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Why I&apos;m Giving These Away Free
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 leading-relaxed mb-4">
              I wasted years on complicated programs and conflicting advice. These resources would 
              have saved me a lot of frustration if someone had just given me the basics upfront.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The fitness industry profits from confusion. I&apos;d rather you start with solid 
              fundamentals for free than waste money on garbage.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If these help you and you want more personalized coaching, great. If not, at least 
              you got some useful training info without spending a dime.
            </p>
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-800 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want More Than Templates?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If you need customized programming, form checks, and accountability, 
            check out my coaching options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/coaching"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              View Coaching Options
            </Link>
            <Link
              href="/book"
              className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-500 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Read the Book
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
