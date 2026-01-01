import { FaBook, FaChartLine, FaDumbbell } from 'react-icons/fa';
import Link from 'next/link';

export default function SocialProofSection() {
  const proofPoints = [
    {
      icon: <FaBook className="w-8 h-8 text-yellow-500" />,
      title: "\"Shut Up and Lift\"",
      description: "A no-nonsense beginner's guide to getting strong—available on Amazon",
      link: "/book",
      linkText: "Get the Book"
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-yellow-500" />,
      title: "Proven Methods",
      description: "Simple linear progression that actually works for beginners",
      link: "/philosophy",
      linkText: "Learn the System"
    },
    {
      icon: <FaDumbbell className="w-8 h-8 text-yellow-500" />,
      title: "Real Results",
      description: "10+ years of consistent training while working full-time",
      link: "/mystory",
      linkText: "My Journey"
    }
  ];

  return (
    <section className="py-16 bg-black border-y border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by Lifters Seeking Clarity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {proofPoints.map((proof, index) => (
            <div 
              key={index}
              className="text-center bg-gray-900/30 p-6 rounded-lg border border-gray-800"
            >
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                {proof.icon}
              </div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">
                {proof.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {proof.description}
              </p>
              <Link 
                href={proof.link}
                className="text-yellow-500 hover:text-yellow-400 font-medium text-sm"
              >
                {proof.linkText} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}