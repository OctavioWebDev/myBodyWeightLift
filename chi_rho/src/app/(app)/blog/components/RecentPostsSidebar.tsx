import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCalendarAlt as CalendarIcon } from 'react-icons/fa'

type Post = {
  slug: string
  title: string
  image: string
  date: string
}

type RecentPostsSidebarProps = {
  posts: Post[]
  title?: string
}

export default function RecentPostsSidebar({ 
  posts, 
  title = "Recent Articles" 
}: RecentPostsSidebarProps) {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
      <h3 className="text-xl font-bold text-yellow-400 mb-6">{title}</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex items-start gap-4 group hover:bg-gray-800 rounded-lg p-3 transition-colors"
          >
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors line-clamp-2 mb-1">
                {post.title}
              </h4>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <CalendarIcon className="w-3 h-3" />
                <span>{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}