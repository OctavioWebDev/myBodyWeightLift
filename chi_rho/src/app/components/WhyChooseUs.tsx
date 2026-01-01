import { FaBook, FaDumbbell, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaDumbbell className="w-6 h-6 text-yellow-500" />,
      title: "10+ Years Under the Bar",
      description: "Real experience building strength while meeting lifes demands. Not theory—tested methods."
    },
    {
      icon: <FaBook className="w-6 h-6 text-yellow-500" />,
      title: "Published Author",
      description: "\"Shut Up and Lift\" cuts through industry BS and teaches beginners what actually matters."
    },
    {
      icon: <FaGraduationCap className="w-6 h-6 text-yellow-500" />,
      title: "BS IT Management",
      description: "WGU graduate who understands balancing education, career advancement, and consistent training."
    },
    {
      icon: <FaBriefcase className="w-6 h-6 text-yellow-500" />,
      title: "Working Professional",
      description: "Overnight warehouse work + serious training. I understand fitting strength into a real schedule."
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Why Chi-Rho Power and Strength?
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/30 transition-colors text-center"
            >
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-black rounded-xl p-8 border border-yellow-500/20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">
            My Philosophy
          </h3>
          <p className="text-gray-300 text-lg text-center">
            The fitness industry profits from keeping you confused. I focus on what actually builds strength: 
            <span className="text-white font-semibold"> compound movements, progressive overload, and consistency.</span> Simple doesn't sell supplements—but it builds real strength.
          </p>
        </div>
      </div>
    </section>
  );
}