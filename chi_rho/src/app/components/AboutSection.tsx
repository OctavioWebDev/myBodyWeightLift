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
                alt="Octavio Sanchez - Strength Coach"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
              Meet Your Coach
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mb-6 mx-auto md:mx-0"></div>
            
            <p className="text-gray-300 text-lg mb-6">
              I'm Octavio Sanchez. I have had many trials while training consistently with serious strength numbers—not because I'm gifted, but because I've learned what actually works.
            </p>
            
            <p className="text-gray-300 text-lg mb-6">
              Over 10+ years of training, I've wasted time on complicated programs that promised everything and delivered nothing. I've made every mistake beginners make. I wrote <em>"Shut Up and Lift"</em> to help people avoid that confusion and focus on what actually builds strength.
            </p>
            
            <p className="text-gray-300 text-lg mb-8">
              I'm not a full-time fitness influencer selling supplements. I'm a working professional who balances demanding work with consistent training. I understand your reality because I live it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/mystory" 
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform text-center"
              >
                Read My Full Story
              </Link>
              <Link 
                href="/coaching" 
                className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-semibold py-3 px-8 rounded-lg transition duration-200 text-center"
              >
                Work With Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}