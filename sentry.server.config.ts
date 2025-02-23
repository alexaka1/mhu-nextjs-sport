// this is your Sentry.init call from `sentry.server.config.js|ts`
import { captureConsoleIntegration, init } from '@sentry/nextjs';
import { env } from '@/app/lib/env';

const integrations = [];
if (process.env.NODE_ENV !== 'development') {
  integrations.push(captureConsoleIntegration());
}

init({
  dsn: env.SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
  integrations: integrations,
});
