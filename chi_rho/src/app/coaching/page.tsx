import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Coaching Services | Chi-Rho Power & Strength',
  description: 'Transform your fitness journey with our personalized coaching services, available both in-person and online.',
};

export default function CoachingServices() {
  const services = [
    {
      title: 'In-Person Training',
      description: 'Personalized one-on-one coaching sessions tailored to your fitness goals. Experience hands-on guidance, real-time feedback, and customized workout plans designed specifically for you.',
      benefits: [
        'Customized workout plans',
        'Real-time feedback and adjustments',
        'Proper form and technique guidance',
      ],
      image: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg'
    },
    {
      title: 'Online Coaching',
      description: 'Flexible training programs you can do anywhere. Get professional guidance and support through our comprehensive online coaching platform.',
      benefits: [
        'Customized training programs',
        'Video form analysis',
        'Weekly check-ins',
        'Nutrition guidance',
      ],
      image: '/assets/images/jakub-zerdzicki-2MbXuj8PDrA-unsplash.jpg'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16"> {/* pt-16 to account for fixed header */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-400">Coaching Services</h1>
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Transform your fitness journey with our personalized coaching services, available both in-person and online.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <h2 className="absolute bottom-0 left-0 right-0 p-6 text-3xl font-bold text-white">
                    {service.title}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">What's Included:</h3>
                  <ul className="space-y-2 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-yellow-400 mr-2">✓</span>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/contact?service=${service.title.toLowerCase().includes('online') ? 'online' : 'in-person'}`}
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-colors duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 bg-gray-900 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Option is Right for You?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation call to discuss your goals and we'll help you choose the perfect coaching solution.
            </p>
            <Link 
              href="/contact?service=consultation"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
