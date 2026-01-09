import React from 'react'
import Link from 'next/link'

type ComingSoonNoticeProps = {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export default function ComingSoonNotice({
  title = "Blog Coming Soon",
  description = "I'm working on creating detailed training articles. In the meantime, check out my book \"Shut Up and Lift\" or grab some of my other training resources.",
  primaryButtonText = "Read the Book",
  primaryButtonLink = "/book",
  secondaryButtonText = "Training Resources",
  secondaryButtonLink = "/templates"
}: ComingSoonNoticeProps) {
  return (
    <div className="mt-16 text-center bg-gray-900/80 backdrop-blur-sm rounded-xl p-12 border border-gray-800">
      <h2 className="text-2xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={primaryButtonLink}
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-colors"
        >
          {primaryButtonText}
        </Link>
        <Link
          href={secondaryButtonLink}
          className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-500 font-bold py-3 px-8 rounded-lg transition-colors"
        >
          {secondaryButtonText}
        </Link>
      </div>
    </div>
  )
}