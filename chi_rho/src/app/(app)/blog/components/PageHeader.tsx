import React from 'react'

type PageHeaderProps = {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
        {title}
      </h1>
      <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  )
}