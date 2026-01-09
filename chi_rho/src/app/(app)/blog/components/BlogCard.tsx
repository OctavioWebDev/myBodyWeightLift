import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCalendarAlt as CalendarIcon, FaClock as ClockIcon } from 'react-icons/fa'

type BlogCardProps = {
  slug: string
  title: string
  excerpt: string
  category: string
  image: string
  date: string
  readTime: string
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  category,
  image,
  date,
  readTime
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group cursor-pointer">
        <div className="relative h-[200px] rounded-xl overflow-hidden mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="space-y-2">
          <span className="inline-block bg-gray-800 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
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