import { FaDumbbell, FaLaptop, FaUsers, FaUserFriends } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  {
    icon: <FaDumbbell className="w-8 h-8 text-yellow-500" />,
    title: "In-Person Training",
    description: "Personalized one-on-one training sessions tailored to your fitness goals and needs.",
    link: "/coaching/in-person"
  },
  {
    icon: <FaLaptop className="w-8 h-8 text-yellow-500" />,
    title: "Online Coaching",
    description: "Flexible training programs with remote guidance, perfect for busy schedules.",
    link: "/coaching/online"
  },
  // {
  //   icon: <FaUsers className="w-8 h-8 text-yellow-500" />,
  //   title: "Group Training",
  //   description: "Motivating group sessions that combine fitness and community support.",
  //   link: "/coaching/group"
  // },
  // {
  //   icon: <FaUserFriends className="w-8 h-8 text-yellow-500" />,
  //   title: "Family Fitness",
  //   description: "Customized programs designed for families to stay active together.",
  //   link: "/coaching/family"
  // }
];

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive fitness solutions tailored to your unique goals and lifestyle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-colors hover:bg-gray-800/80"
            >
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">{service.title}</h3>
              <p className="text-gray-300 text-center mb-6">{service.description}</p>
              <div className="text-center">
                <Link 
                  href={service.link}
                  className="inline-block text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
