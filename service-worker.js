const CACHE_NAME = 'pokedex-cache-v1';
const urlsToCache = [
  'index.html',
  'style.css',
  'script.js',
  'background.png',
];

// Instala o service worker e adiciona arquivos ao cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Recupera arquivos do cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // Arquivo encontrado no cache
      }
      return fetch(event.request); // Solicita do servidor
    })
  );
});

// Ativa o service worker e remove caches antigos
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
