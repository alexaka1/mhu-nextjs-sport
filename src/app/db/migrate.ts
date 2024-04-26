import { migrate } from 'drizzle-orm/libsql/migrator';
import { db, client } from './db';

void migrate(db, { migrationsFolder: 'drizzle' }).then(() => {
  client.close();
});
