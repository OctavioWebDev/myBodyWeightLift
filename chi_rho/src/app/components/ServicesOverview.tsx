import { FaDumbbell, FaLaptop } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  {
    icon: <FaDumbbell className="w-8 h-8 text-yellow-500" />,
    title: "In-Person Training",
    subtitle: "Toledo Area Only",
    price: "Starting at $75/session",
    description: "Hands-on strength coaching. Perfect your squat, bench, and deadlift with expert technique guidance.",
    features: [
      "One-on-one coaching",
      "Real-time form corrections",
      "Personalized programming",
      "Competition prep available"
    ],
    link: "/coaching/in-person"
  },
  {
    icon: <FaLaptop className="w-8 h-8 text-yellow-500" />,
    title: "Online Coaching",
    subtitle: "Train Anywhere",
    price: "Starting at $97/month",
    description: "Custom programming, form checks, and accountability. Expert guidance wherever you train.",
    features: [
      "Auto-regulated programming",
      "Weekly check-ins",
      "Form video analysis",
      "Direct messaging support"
    ],
    link: "/coaching/online"
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Choose Your Path to Strength
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're in Toledo or training remotely, I have options to help you get stronger
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-8 rounded-xl border-2 border-gray-800 hover:border-yellow-500/50 transition-all hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
              <p className="text-yellow-400 text-sm mb-2">{service.subtitle}</p>
              <p className="text-2xl font-bold text-yellow-500 mb-4">{service.price}</p>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href={service.link}
                className="block w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-200 text-center"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/coaching"
            className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            View All Packages & Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}