import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-500/30">
              <Image
                src="/assets/images/MyNewHeadShot.JPG"
                alt="Octavio Sanchez - Fitness Coach"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Meet Your Coach</h2>
            <div className="w-24 h-1 bg-yellow-500 mb-6 mx-auto md:mx-0"></div>
            <p className="text-gray-300 text-lg mb-6">
              Hi, I'm Octavio Sanchez, a dedicated fitness coach with a passion for helping individuals transform their lives through strength training and proper nutrition. With years of experience and a family-focused approach, I understand the challenges of balancing health, work, and family.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              My journey from personal challenges to fitness success has shaped my coaching philosophy: sustainable progress through consistency, proper form, and a balanced approach to health and wellness.
            </p>
            <Link 
              href="/mystory" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              My Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
