import { FaUserCircle, FaClipboardCheck, FaDumbbell, FaChartLine } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: <FaUserCircle className="w-8 h-8 text-yellow-500" />,
      title: "Initial Consultation",
      description: "We'll discuss your goals, fitness level, and any concerns to create a personalized plan."
    },
    {
      number: '02',
      icon: <FaClipboardCheck className="w-8 h-8 text-yellow-500" />,
      title: "Custom Plan Creation",
      description: "Receive a tailored fitness and nutrition plan designed specifically for your needs."
    },
    {
      number: '03',
      icon: <FaDumbbell className="w-8 h-8 text-yellow-500" />,
      title: "Start Training",
      description: "Begin your fitness journey with guided workouts and ongoing support."
    },
    {
      number: '04',
      icon: <FaChartLine className="w-8 h-8 text-yellow-500" />,
      title: "Track & Adjust",
      description: "Regular check-ins to monitor progress and make necessary adjustments to your program."
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Getting started with your fitness transformation is simple and straightforward
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-500/30 -ml-0.5"></div>
          
          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Left side (content) */}
                <div className={`md:w-1/2 mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/30 transition-colors h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mr-4 border border-yellow-500/30">
                        {step.icon}
                      </div>
                      <span className="text-2xl font-bold text-yellow-500">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>

                {/* Right side (spacer for even steps) */}
                <div className="hidden md:block md:w-1/2">
                  {/* Empty on purpose for spacing */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="/contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
