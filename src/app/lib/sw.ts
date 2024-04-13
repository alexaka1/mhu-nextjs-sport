import type { SerwistGlobalConfig } from '@serwist/core';
import { defaultCache } from '@serwist/next/worker';
import type { PrecacheEntry } from '@serwist/precaching';
import { Serwist } from '@serwist/sw';

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

new Serwist().install({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
});

// Put your service worker logic here. https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
