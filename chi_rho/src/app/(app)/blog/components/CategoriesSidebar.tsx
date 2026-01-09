import React from 'react'
import Link from 'next/link'

type Category = {
  name: string
  slug: string
}

type CategoriesSidebarProps = {
  categories: Category[]
  title?: string
}

export default function CategoriesSidebar({ 
  categories, 
  title = "Categories" 
}: CategoriesSidebarProps) {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
      <h3 className="text-xl font-bold text-yellow-400 mb-6">{title}</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/blog?category=${category.slug}`}
            className="block bg-gray-800 hover:bg-gray-700 rounded-lg px-4 py-3 text-gray-300 hover:text-yellow-400 transition-colors"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}