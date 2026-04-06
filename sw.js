const CACHE_NAME = 'safi-site-v4';
const CORE_ASSETS = [
  './index.html',
  './offline.html',
  './404.html',
  './manifest.json',
  './css/tokens.css',
  './css/base.css',
  './css/components.css',
  './css/sections.css',
  './css/pages.css',
  './js/utils.js',
  './js/navigation.js',
  './js/app-core.js',
  './js/home.js',
  './js/services.js',
  './js/portfolio.js',
  './js/products.js',
  './js/brief.js',
  './js/contact.js',
  './js/structured-data.js',
  './data/site.js',
  './data/services.js',
  './data/portfolio.js',
  './data/products.js',
  './data/testimonials.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './og-image.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          if (!response || !response.ok) return response;
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./offline.html');
          }
          return caches.match('./icons/icon-192.png');
        });
    })
  );
});
