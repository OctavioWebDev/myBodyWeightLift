import { FaSpinner, FaBrain, FaUsers } from 'react-icons/fa';

export default function ProblemSection() {
  const problems = [
    {
      icon: <FaSpinner className="w-8 h-8 text-yellow-500" />,
      title: "Spinning Your Wheels",
      description: "You're training hard but not getting stronger. You don't know if you're doing too much, too little, or if your program even makes sense."
    },
    {
      icon: <FaBrain className="w-8 h-8 text-yellow-500" />,
      title: "Drowning in sophistry",
      description: "Every 'guru' has a different method. You're confused by contradictory advice and paralyzed by overthinking."
    },
    {
      icon: <FaUsers className="w-8 h-8 text-yellow-500" />,
      title: "No Accountability",
      description: "You can find a program online, but you need someone who knows your situation and keeps you on track."
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tired of Programs That Don't Work?
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-yellow-500/30 transition-colors"
            >
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-yellow-400 text-center mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-300 text-center">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The fitness industry profits from keeping you confused. You don't need another 12-week program PDF. 
            <span className="text-yellow-400 font-semibold"> You need a coach who cuts through the noise.</span>
          </p>
        </div>
      </div>
    </section>
  );
}