// This tells TypeScript this is a Service Worker
/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="webworker" />

// This is a type-only import, it will be removed during build
import type { } from 'serviceworker-webpack-plugin';

const CACHE_NAME = 'chi-rho-cache-v1';
const urlsToCache = [
  '/',
  '/blog',
  '/workouttemplates',
  '/mystory',
  '/favicon.ico',
  '/manifest.json',
  // Add other important routes here
];

// Cast self to ServiceWorkerGlobalScope
const sw = self as unknown as ServiceWorkerGlobalScope;

// Install event - cache static assets
sw.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache, falling back to network
sw.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          (response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// Activate event - clean up old caches
sw.addEventListener('activate', (event: ExtendableEvent) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
          return null;
        }).filter(Boolean) as Promise<boolean>[]
      );
    })
  );
});

// Export an empty object to make TypeScript happy
export { };
