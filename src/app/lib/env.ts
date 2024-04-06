import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';
import * as process from 'process';

export const env = createEnv({
  server: {
    ENABLE_EXPERIMENTAL_COREPACK: z.number({ coerce: true }).max(1).min(0),
    NEXT_TELEMETRY_DISABLED: z.number({ coerce: true }).max(1).min(0),
    SENTRY_AUTH_TOKEN: z.string(),
    SENTRY_ORG: z.string(),
    SENTRY_PROJECT: z.string(),
    SENTRY_DSN: z.string(),
    TURSO_DATABASE_URL: z.string(),
    TURSO_AUTH_TOKEN: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    AUTH_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    SIMPLELOGIN_CLIENT_ID: z.string(),
    SIMPLELOGIN_CLIENT_SECRET: z.string(),
  },
  client: {
    NEXT_PUBLIC_MAPS_API_KEY: z.string(),
    NEXT_PUBLIC_SENTRY_DSN: z.string(),
    NEXT_PUBLIC_SENTRY_REPORT_URI: z.string(),
  },
  // For Next.js >= 13.4.4, you need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_MAPS_API_KEY: process.env['NEXT_PUBLIC_MAPS_API_KEY'],
    NEXT_PUBLIC_SENTRY_DSN: process.env['NEXT_PUBLIC_SENTRY_DSN'],
    NEXT_PUBLIC_SENTRY_REPORT_URI: process.env['NEXT_PUBLIC_SENTRY_REPORT_URI'],
  },
});
