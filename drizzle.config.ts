import type { Config } from 'drizzle-kit';
import process from 'process';

export default {
  schema: './src/app/db/schema.ts',
  out: './drizzle',
  driver: 'libsql',
  dbCredentials: {
    url: process.env['TURSO_DATABASE_URL'] as string,
  },
} satisfies Config;
