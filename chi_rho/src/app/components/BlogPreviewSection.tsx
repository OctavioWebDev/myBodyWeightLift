import React from 'react'
import Link from 'next/link'
import BlogCard from '../(app)/blog/components/BlogCard'

export default function BlogPreviewSection() {
  const recentPosts = [
    {
      slug: 'progressive-overload-explained',
      title: 'Progressive Overload: The Only Principle That Matters',
      excerpt: 'Understanding the single most important concept for building strength.',
      category: 'Training',
      image: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg',
      date: 'January 6, 2026',
      readTime: '8 min read'
    },
    {
      slug: 'stop-program-hopping',
      title: 'Stop Program Hopping',
      excerpt: 'Why switching programs every 6 weeks is killing your progress.',
      category: 'Training',
      image: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg',
      date: 'January 5, 2026',
      readTime: '6 min read'
    },
    {
      slug: 'beginner-mistakes',
      title: '5 Mistakes Every Beginner Makes',
      excerpt: 'Learn from my failures so you don\'t waste years like I did.',
      category: 'Training',
      image: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg',
      date: 'January 4, 2026',
      readTime: '7 min read'
    }
  ]

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Latest Training Articles
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            No-nonsense advice on getting stronger. No fluff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}