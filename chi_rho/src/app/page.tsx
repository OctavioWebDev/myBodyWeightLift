import HeroCarousel from "./components/HeroSection";
import OurValuesSection from "./components/OurValues";
import ProductsTiles from "./components/ProductsTiles";
import { getPosts } from '../../lib/post';

export const revalidate = 60; // in seconds

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <HeroCarousel />
      <ProductsTiles />
      <OurValuesSection />
      <div className="container mx-auto px-4 my-8">
        <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        </div>
      </div>
    </div>
  )
}
