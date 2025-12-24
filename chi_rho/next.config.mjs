import createMDX from '@next/mdx';
import { withPWA } from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  images: {
    domains: ['images.unsplash.com'],
  },

  // Service Worker and PWA configuration
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },

  // Webpack configuration for service worker
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Service worker will be built to public/service-worker.js
      config.resolve.alias['@/service-worker'] = false;
    }
    return config;
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Apply PWA and MDX configurations
export default withMDX(withPWA(nextConfig));