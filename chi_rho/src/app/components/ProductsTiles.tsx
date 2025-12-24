import Image from 'next/image'

export default function ProductsTiles() {
  const tiles = [
    {
      title: 'Coaching Services',
      description: 'Enhance your performance with targeted strength training',
      image: '/assets/images/sven-mieke-MsCgmHuirDo-unsplash.jpg',
    },
    {
      title: 'Trainning Templates',
      description: 'Navigate your journey with our training templates',
      image: '/assets/images/nathan-dumlao-IFme2F6eQ2E-unsplash.jpg',
    },
  ]
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-8 max-w-10xl max mx-auto">
          {tiles.map((tile, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 group bg-gray-800 h-48"
            >
              <Image
                src={tile.image}
                alt={tile.title}
                layout="fill"
                objectFit="cover"
                className="opacity-70"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">{tile.title}</h3>
                <p className="text-sm text-gray-200">{tile.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  