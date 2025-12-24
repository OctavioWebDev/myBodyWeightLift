import Image from 'next/image'
import Link from 'next/link';

export default function ProductsTiles() {
  const tiles = [
    {
      title: 'Coaching Services',
      description: 'Enhance your performance with targeted strength training',
      image: '/assets/images/sven-mieke-MsCgmHuirDo-unsplash.jpg',
      href: '/coaching'
    },
    {
      title: 'Training Templates',
      description: 'Navigate your journey with our training templates',
      image: '/assets/images/nathan-dumlao-IFme2F6eQ2E-unsplash.jpg',
      href: '/templates' // You can update this link later when you create the templates page
    },
  ]
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {tiles.map((tile, index) => (
          <Link 
            href={tile.href}
            key={index}
            className="block h-full"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 group bg-gray-800 h-48 md:h-64">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  {tile.title}
                </h3>
                <p className="text-sm md:text-base text-gray-200">{tile.description}</p>
                <span className="mt-4 inline-flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
  
  