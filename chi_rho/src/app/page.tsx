'use client';

import dynamic from 'next/dynamic';
import AboutSection from './components/AboutSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ServicesOverview from './components/ServicesOverview';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import SocialProofSection from './components/SocialProofSection';
import BlogPreviewSection from './components/BlogPreviewSection';

const HeroCarousel = dynamic(() => import('./components/HeroSection'), { ssr: false });
const ProductsTiles = dynamic(() => import('./components/ProductsTiles'), { ssr: false });

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroCarousel />
      <SocialProofSection />
      <AboutSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
      <BlogPreviewSection />
      <ProductsTiles />
    </main>
  );
}
