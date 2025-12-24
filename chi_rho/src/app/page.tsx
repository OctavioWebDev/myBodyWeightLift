'use client';

import dynamic from 'next/dynamic';
import AboutSection from './components/AboutSection';
import ServicesOverview from './components/ServicesOverview';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';

// Dynamically import with no SSR for better performance
const HeroCarousel = dynamic(() => import('./components/HeroSection'), { ssr: false });
const ProductsTiles = dynamic(() => import('./components/ProductsTiles'), { ssr: false });

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroCarousel />
      <AboutSection />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
      <ProductsTiles />
    </main>
  );
}
