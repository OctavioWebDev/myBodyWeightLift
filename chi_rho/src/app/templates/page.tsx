import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Training Templates | Chi-Rho Power & Strength',
  description: 'High-quality training templates designed to help you achieve your fitness goals. Downloadable PDFs available for purchase.',
};

const templates = [
  {
    id: 'beginner-strength',
    title: 'Beginner Strength Program',
    description: 'A 12-week program designed for beginners to build a solid foundation of strength and proper movement patterns.',
    price: 5.00,
    image: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg',
    category: 'Strength',
    duration: '12 weeks',
    level: 'Beginner',
  },
  {
    id: 'intermediate-hypertrophy',
    title: 'Hypertrophy Builder',
    description: 'An 8-week program focused on muscle growth and hypertrophy for intermediate lifters.',
    price: 5.00,
    image: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg',
    category: 'Hypertrophy',
    duration: '8 weeks',
    level: 'Intermediate',
  },
  {
    id: 'advanced-powerlifting',
    title: 'Powerlifting Peaking Program',
    description: 'A 6-week peaking program for advanced lifters preparing for competition.',
    price: 5.00,
    image: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg',
    category: 'Powerlifting',
    duration: '6 weeks',
    level: 'Advanced',
  },
];

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-400">Training Templates</h1>
          <p className="text-xl text-center text-gray-300 mb-6 max-w-3xl mx-auto">
            Downloadable training programs designed by experts to help you reach your fitness goals.
          </p>
          <div className="text-center mb-12">
            <p className="text-gray-400 mb-4">Not sure which program is right for you?</p>
            <Link 
              href="/quiz" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Take Our Quiz
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div key={template.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                    ${template.price.toFixed(2)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold">{template.title}</h2>
                    <span className="text-sm bg-gray-700 text-yellow-400 px-2 py-1 rounded">
                      {template.level}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{template.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded">
                      {template.category}
                    </span>
                    <span className="text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded">
                      {template.duration}
                    </span>
                  </div>
                  
                  <Link 
                    href={`/templates/${template.id}`}
                    className="block w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded text-center transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Not Sure Which Template to Choose?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Take our quick quiz to find the perfect training program for your goals and experience level.
            </p>
            <Link 
              href="/quiz" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
