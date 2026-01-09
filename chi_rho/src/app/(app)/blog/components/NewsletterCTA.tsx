import React from 'react'
import Link from 'next/link'

type NewsletterCTAProps = {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

export default function NewsletterCTA({
  title = "Get Weekly Tips",
  description = "No spam. No sales pitches. Just useful strength training advice every week.",
  buttonText = "Get Free Resources",
  buttonLink = "/templates"
}: NewsletterCTAProps) {
  return (
    <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 rounded-xl p-6 border border-yellow-500/20">
      <h3 className="text-xl font-bold text-yellow-400 mb-3">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">
        {description}
      </p>
      <Link
        href={buttonLink}
        className="block w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-lg text-center transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  )
}