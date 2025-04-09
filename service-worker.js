const CACHE_NAME = 'carnivalesque-cache-v1';
const urlsToCache = [
	"/",
	"index.html",
	"styles.css",
	"script.js",
	"assets/img3.jpg",
    "assets/dance & folic.jpg",
    "assets/drawmics.jpg",
    "assets/event.jpg",
    "assets/img1.jpg",
    "assets/img2.jpg",
    "assets/quizard.jpg",
	// Add other assets as needed
];

// Install the service worker and cache the files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch the cached files
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});