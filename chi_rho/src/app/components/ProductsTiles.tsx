import Image from 'next/image'
import Link from 'next/link';

export default function ProductsTiles() {
  const tiles = [
    {
      title: 'Coaching Services',
      description: 'Expert programming and accountability to build serious strength',
      image: '/assets/images/sven-mieke-MsCgmHuirDo-unsplash.jpg',
      href: '/coaching',
      cta: 'View Packages'
    },
    {
      title: 'Shut Up and Lift',
      description: 'The book that documents the auto-regulated methodology',
      image: '/assets/images/nathan-dumlao-IFme2F6eQ2E-unsplash.jpg',
      href: '/book',
      cta: 'Get the Book'
    },
  ]
  
  return (
    <div className="container mx-auto px-4 py-16 bg-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
          Ready to Get Started?
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {tiles.map((tile, index) => (
          <Link 
            href={tile.href}
            key={index}
            className="block h-full"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 group bg-gray-800 h-64 md:h-80">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  {tile.title}
                </h3>
                <p className="text-base md:text-lg text-gray-200 mb-4">{tile.description}</p>
                <span className="inline-flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors font-semibold">
                  {tile.cta}
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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