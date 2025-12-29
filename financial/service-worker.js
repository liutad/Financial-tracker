self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("tracker-app-cache").then(cache => {
      return cache.addAll([
        "finance.html",
        "manifest.json",
        "icons/icon-192.png",
        "icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});