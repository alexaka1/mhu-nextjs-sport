import type { Config } from 'drizzle-kit';
import { env } from '@/app/lib/env';

export default {
  schema: './src/app/db/schema.ts',
  out: './drizzle',
  driver: 'libsql',
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
  },
  strict: true,
  verbose: true,
} satisfies Config;
