// Service Worker for Carnival Website with Wishlist/Favorites Feature
const CACHE_NAME = "carnival-cache-v1";

// Assets to cache on install
const ASSETS_TO_CACHE = [
	"/",
	"/index.html",
	"/styles.css",
	"/script.js",
	"assets/img3.jpg",
	"assets/dance & folic.jpg",
	"assets/drawmics.jpg",
	"assets/event.jpg",
	"assets/img1.jpg",
	"assets/img2.jpg",
	"assets/quizard.jpg",
	// Add other assets you want to cache
];

// Install event - Cache assets
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => {
				console.log("Opened cache");
				return cache.addAll(ASSETS_TO_CACHE);
			})
			.then(() => self.skipWaiting())
	);
});

// Activate event - Clean up old caches
self.addEventListener("activate", (event) => {
	const cacheWhitelist = [CACHE_NAME];

	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return Promise.all(
					cacheNames.map((cacheName) => {
						if (cacheWhitelist.indexOf(cacheName) === -1) {
							return caches.delete(cacheName);
						}
					})
				);
			})
			.then(() => self.clients.claim())
	);
});

// Fetch event - Serve cached content when offline
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches
			.match(event.request)
			.then((response) => {
				// Cache hit - return the response
				if (response) {
					return response;
				}

				// Clone the request because it's a one-time use
				const fetchRequest = event.request.clone();

				return fetch(fetchRequest).then((response) => {
					// Check if we received a valid response
					if (
						!response ||
						response.status !== 200 ||
						response.type !== "basic"
					) {
						return response;
					}

					// Clone the response because it's a one-time use
					const responseToCache = response.clone();

					caches.open(CACHE_NAME).then((cache) => {
						// Don't cache API requests or other dynamic data
						if (!event.request.url.includes("/api/")) {
							cache.put(event.request, responseToCache);
						}
					});

					return response;
				});
			})
			.catch(() => {
				// If there's a match failure, try to return a fallback page
				if (event.request.mode === "navigate") {
					return caches.match("/index.html");
				}
			})
	);
});

// Ensure favorites data persists and is synced when online
self.addEventListener("sync", (event) => {
	if (event.tag === "sync-favorites") {
		event.waitUntil(syncFavorites());
	}
});

// Sync favorites data with server (when we have one)
function syncFavorites() {
	// In a real app, this would sync with a server
	// Here we're just ensuring the data is loaded from localStorage
	return Promise.resolve();
}

// Listen for messages from the main thread
self.addEventListener("message", (event) => {
	if (event.data.action === "skipWaiting") {
		self.skipWaiting();
	}

	// Handle favorite update messages
	if (event.data.action === "updateFavorites") {
		// In a real app with a backend, we might sync this data
		console.log("Favorites updated:", event.data.favorites);
	}
});
