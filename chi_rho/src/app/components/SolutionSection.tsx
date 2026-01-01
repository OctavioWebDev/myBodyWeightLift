import { FaBalanceScale, FaBullhorn, FaMountain } from 'react-icons/fa';
import Link from 'next/link';

export default function SolutionSection() {
  const benefits = [
    {
      icon: <FaBalanceScale className="w-8 h-8 text-yellow-500" />,
      title: "Simple, Not Easy",
      description: "No complexity for the sake of complexity. Just intelligent programming focused on progressive overload and consistent execution."
    },
    {
      icon: <FaBullhorn className="w-8 h-8 text-yellow-500" />,
      title: "No-BS Coaching",
      description: "Straight talk. No supplement pitches. No dependency-creating complexity. Just honest guidance to help you get stronger."
    },
    {
      icon: <FaMountain className="w-8 h-8 text-yellow-500" />,
      title: "Built for Real Life",
      description: "Programs designed for people with jobs, families, and responsibilities. Not 2-hour gym sessions. Sustainable strength."
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            The Chi-Rho Approach: Strength Without the Noise
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-colors"
            >
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 rounded-xl p-8 border border-yellow-500/20 max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 text-center mb-6">
            Whether you're a complete beginner or stuck spinning your wheels on complicated programs, 
            <span className="text-yellow-400 font-semibold"> I'll help you cut through the BS and focus on what actually works.</span>
          </p>
          <div className="text-center">
            <Link 
              href="/coaching"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              See Coaching Options
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}