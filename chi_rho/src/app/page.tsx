import HeroCarousel from "./components/HeroSection";
import OurValuesSection from "./components/OurValues";
import ProductsTiles from "./components/ProductsTiles";
import LatestArticleTile from "./components/LatestArticleTile";
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
          {/* {posts.slice(0, 3).map((post) => (
            <LatestArticleTile
              key={post.id}
              imageUrl={post.imageUrl}
              title={post.title}
              shortDescription={post.shortDescription}
              category={post.category}
              author={post.author}
              date={post.date}
              longDescription={post.longDescription}
            />
          ))} */}
        </div>
      </div>
    </div>
  )
}
