'use client'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import FeaturedPost from './FeaturedPost'
import BlogCard from './BlogCard'
import RecentPostsSidebar from './RecentPostsSidebar'
import CategoriesSidebar from './CategoriesSidebar'
import NewsletterCTA from './NewsletterCTA'
import ComingSoonNotice from './ComingSoonNotice'
import PageHeader from './PageHeader'

export default function BlogContent() {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get('category')

  const allPosts = [
    {
      slug: 'progressive-overload-explained',
      title: 'Progressive Overload: The Only Principle That Matters',
      excerpt: 'Understanding the single most important concept for building strength. Everything else is just details.',
      category: 'training',
      image: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg',
      date: 'January 6, 2026',
      readTime: '8 min read'
    },
    {
      slug: 'stop-program-hopping',
      title: 'Stop Program Hopping',
      excerpt: 'Why switching programs every 6 weeks is killing your progress.',
      category: 'training',
      image: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg',
      date: 'January 5, 2026',
      readTime: '6 min read'
    },
    {
      slug: 'beginner-mistakes',
      title: '5 Mistakes Every Beginner Makes',
      excerpt: 'Learn from my failures so you don\'t waste years like I did.',
      category: 'training',
      image: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg',
      date: 'January 4, 2026',
      readTime: '7 min read'
    },
    {
      slug: 'squat-form-basics',
      title: 'Squat Form: The Basics',
      excerpt: 'Master the most important lift with these fundamental cues.',
      category: 'technique',
      image: '/assets/images/cathy-mu-UWFjqxYWAmA-unsplash.jpg',
      date: 'January 3, 2026',
      readTime: '10 min read'
    },
    {
      slug: 'training-consistency',
      title: 'Consistency > Perfection',
      excerpt: 'Why showing up beats optimization every single time.',
      category: 'mindset',
      image: '/assets/images/joshua-hoehne-0F4duBPWlCw-unsplash.jpg',
      date: 'January 2, 2026',
      readTime: '5 min read'
    }
  ]

  // Filter posts by category if one is selected
  const filteredPosts = selectedCategory
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts

  const featuredPost = filteredPosts[0]
  const recentPosts = filteredPosts.slice(1)

  const categories = [
    { name: 'Training Fundamentals', slug: 'training' },
    { name: 'Technique & Form', slug: 'technique' },
    { name: 'Programming', slug: 'programming' },
    { name: 'Mindset', slug: 'mindset' },
    { name: 'Nutrition & Recovery', slug: 'nutrition' }
  ]

  // Get category name for display
  const getCategoryName = (slug: string) => {
    const category = categories.find(cat => cat.slug === slug)
    return category ? category.name : 'All Articles'
  }

  return (
    <>
      <PageHeader 
        title={selectedCategory ? getCategoryName(selectedCategory) : "Training Articles"}
        description={selectedCategory 
          ? `Articles about ${getCategoryName(selectedCategory).toLowerCase()}`
          : "Practical advice on strength training. No fluff."
        }
      />

      {/* Show "View All" button if category is selected */}
      {selectedCategory && (
        <div className="text-center mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            ← View All Articles
          </Link>
        </div>
      )}

      {/* Show message if no posts in category */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-xl mb-6">
            No articles in this category yet. Check back soon!
          </p>
          <Link
            href="/blog"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View All Articles
          </Link>
        </div>
      )}

      {filteredPosts.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          {/* Main Content */}
          <div>
            <FeaturedPost {...featuredPost} />

            {/* Recent Posts Grid */}
            {recentPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts.map((post) => (
                  <BlogCard key={post.slug} {...post} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <RecentPostsSidebar 
              posts={allPosts.slice(0, 5).map(post => ({
                slug: post.slug,
                title: post.title,
                image: post.image,
                date: post.date
              }))} 
            />
            <CategoriesSidebar categories={categories} />
            <NewsletterCTA />
          </div>
        </div>
      )}

      <ComingSoonNotice />
    </>
  )
}
