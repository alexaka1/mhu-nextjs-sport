// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import {
  browserApiErrorsIntegration,
  browserTracingIntegration,
  captureRouterTransitionStart,
  init,
  replayIntegration,
} from '@sentry/nextjs';
import { env } from '@/app/lib/env';

const integrations = [];
if (process.env.NODE_ENV !== 'development') {
  integrations.push(
    replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
    browserApiErrorsIntegration(),
    browserTracingIntegration(),
  );
}

init({
  dsn: env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 0.56,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: integrations,
});
export const onRouterTransitionStart = captureRouterTransitionStart;
