import { FaShieldAlt, FaUserTie, FaHeartbeat, FaChartLine } from 'react-icons/fa';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt className="w-6 h-6 text-yellow-500" />,
      title: "Proven Methods",
      description: "Evidence-based training techniques that deliver real results"
    },
    {
      icon: <FaUserTie className="w-6 h-6 text-yellow-500" />,
      title: "Personalized Approach",
      description: "Customized programs tailored to your unique goals and needs"
    },
    {
      icon: <FaHeartbeat className="w-6 h-6 text-yellow-500" />,
      title: "Holistic Focus",
      description: "We care about your overall well-being, not just your fitness"
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-yellow-500" />,
      title: "Sustainable Results",
      description: "Strategies that help you maintain progress for life"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">Why Choose Chi Rho Power & Strength?</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference of working with a coach who truly cares about your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-colors text-center"
            >
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900/50 rounded-xl p-8 border border-yellow-500/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Our Promise to You</h3>
            <p className="text-gray-300 text-lg mb-6">
              When you train with Chi Rho Power & Strength, you're not just another client. You become part of our fitness family, 
              receiving the support, knowledge, and motivation you need to achieve your goals and maintain a healthy, active lifestyle.
            </p>
            <p className="text-yellow-400 font-medium">
              Your success is our success, and we're committed to helping you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
