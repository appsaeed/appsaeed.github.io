"use strict";

/**
 * Service Worker of PWA
 * To learn more and add one to your website, visit - https://PWA.com
 */

const cacheName = "pwa-chace";
const offlinePage = self.location.protocol + "//" + self.location.host + "/";
const filesToCache = ["blurr-99397f12.webp","developer-activity-8545d1a3.svg","bg-hero-0ba10949.jpeg","apple-store-994d47a8.svg","business-37b8212e.svg","billing-fd47dad8.png","payment-card-af071def.png","play-google-3035153f.svg","send-454b3199.svg","shield-6d9e87e5.svg","star-b8bf87ea.svg","support-animate-762603b2.svg","ftools-fa79fd13.png","herobg-ecbfddc8.png","globe-d7adf010.png","robot-352cd501.png","asc-919972ef.png","harvardedit-36ffbc20.png","oxfordeditor-8662abce.png","static-home-1db70e2b.png","the247openhouse-cda052ce.png","javascript-59cf4c89.jpg","laravel-dac4a53f.jpg","php-f9139dae.png","reactjs-966214a8.png","solidjs-123b04bc.svg","gluxy-cover-30167500.png","index-cacd1937.css","index.html","manifest.json"];
const neverCacheUrls = [/\/asc/, /\/ftools/, /manifest.webmanifest /];

// Install
self.addEventListener("install", function (e) {
  console.log("PWA service worker installation");
  e.waitUntil(
    setTimeout(() => {
      addEventListener("message", (event) => {
        caches.open(cacheName).then(function (cache) {
          console.log("PWA service worker caching dependencies");
          event.data.map(async function (url) {
            try {
              return await cache.add(url);
            } catch (reason) {}
          });
        });
      });
    }, 1000)
  );
});

//Activate and deleted old cached
self.addEventListener("activate", function (e) {
  console.log("PWA service worker activation");
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== cacheName) {
            console.log("PWA old cache removed", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch
self.addEventListener("fetch", function (e) {
  // Return if the current request url is in the never cache list
  if (!neverCacheUrls.every(checkNeverCacheList, e.request.url)) {
    console.log("PWA: Current request is excluded from cache.");
    return;
  }

  // Return if request url protocal isn't http or https
  if (!e.request.url.match(/^(http|https):\/\//i)) return;

  // Return if request url is from an external domain.
  if (new URL(e.request.url).origin !== location.origin) return;
  // For POST requests, do not use the cache. Serve offline page if offline.
  if (e.request.method !== "GET") {
    e.respondWith(
      fetch(e.request).catch(async function () {
        const res = await caches.match(e.request);
        return res;
      })
    );
    return;
  }

  // Revving strategy
  if (e.request.mode === "navigate" && navigator.onLine) {
    e.respondWith(
      fetch(e.request).then(async function (response) {
        const cache = await caches.open(cacheName);
        cache.put(e.request, response.clone());
        return response;
      })
    );
    return;
  }

  e.respondWith(
    caches
      .match(e.request)
      .then(function (response) {
        return (
          response ||
          fetch(e.request).then(async function (response) {
            const cache = await caches.open(cacheName);
            cache.put(e.request, response.clone());
            return response;
          })
        );
      })
      .catch(async function () {
        const res = await caches.match(e.request);
        return res;
      })
  );
});

// Check if current url is in the neverCacheUrls list
function checkNeverCacheList(url) {
  if (this.match(url)) {
    return false;
  }
  return true;
}
