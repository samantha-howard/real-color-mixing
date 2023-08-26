/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "891240e1e0136ec41a8e6fe56f6ad2fe"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-25f4f0e7.entry.js"
  },
  {
    "url": "build/p-26620f57.entry.js"
  },
  {
    "url": "build/p-2a2c80d3.js"
  },
  {
    "url": "build/p-2fe6bd82.entry.js"
  },
  {
    "url": "build/p-4c4121a7.entry.js"
  },
  {
    "url": "build/p-4d64b7b7.js"
  },
  {
    "url": "build/p-6c31fb2c.entry.js"
  },
  {
    "url": "build/p-786a6a8e.css"
  },
  {
    "url": "build/p-7f0a3b34.entry.js"
  },
  {
    "url": "build/p-81099acf.js"
  },
  {
    "url": "build/p-b5db3c78.entry.js"
  },
  {
    "url": "build/p-c1c725fd.entry.js"
  },
  {
    "url": "build/p-cd8296b0.js"
  },
  {
    "url": "build/p-d0b6ef82.entry.js"
  },
  {
    "url": "build/p-e4c36a3a.entry.js"
  },
  {
    "url": "build/p-e9c8ddc1.entry.js"
  },
  {
    "url": "build/p-f8d51b4d.js"
  },
  {
    "url": "manifest.json",
    "revision": "f8c2179f12e5254c1cb6a27566fff6d7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
