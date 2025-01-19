import type { Config } from 'drizzle-kit';
import { env } from '@/app/lib/env';

export default {
  schema: './src/app/db/schema.ts',
  out: './drizzle',
  dialect: 'turso',
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
  strict: true,
} satisfies Config;
