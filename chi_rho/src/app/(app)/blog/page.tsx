import React, { Suspense } from 'react'
import BlogContent from './components/BlogContent'
import PageHeader from './components/PageHeader'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Suspense fallback={
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-yellow-400 border-r-transparent"></div>
          </div>
        }>
          <BlogContent />
        </Suspense>
      </div>
    </div>
  )
}