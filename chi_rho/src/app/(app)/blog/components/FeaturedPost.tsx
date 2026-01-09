import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCalendarAlt as CalendarIcon, FaClock as ClockIcon } from 'react-icons/fa'

type FeaturedPostProps = {
  slug: string
  title: string
  excerpt: string
  category: string
  image: string
  date: string
  readTime: string
}

export default function FeaturedPost({
  slug,
  title,
  excerpt,
  category,
  image,
  date,
  readTime
}: FeaturedPostProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="mb-12 group cursor-pointer">
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <span className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold mb-3">
              {category}
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">
            {title}
          </h2>
          <p className="text-gray-400 text-lg">
            {excerpt}
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}