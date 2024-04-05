import * as process from 'process';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

export const client = createClient({
  url: process.env['TURSO_DATABASE_URL'] as string,
  authToken: process.env['TURSO_AUTH_TOKEN'],
});
export const db = drizzle(client, { schema: schema });
