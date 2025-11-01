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
  integrations: integrations,

  // Enable logs to be sent to Sentry
  enableLogs: true,
});
