import { integer, sqliteTable, text, primaryKey, index } from 'drizzle-orm/sqlite-core';
import { type Result, type ResultMimeType, type UserRolesType } from '@/app/lib/types';
import { user } from '../../../auth-schema';

export const roles = sqliteTable(
  'roles',
  {
    isAdmin: integer('isAdmin').default(0),
    roles: text('roles', { mode: 'json' }).$type<UserRolesType>().default({ roles: [] }),
    id: text('id').primaryKey(),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
  },
  (t) => [
    index('roles_userId_idx').on(t.userId),
    index('roles_isAdmin_idx').on(t.isAdmin), // optional
  ],
);

export const results = sqliteTable(
  'result',
  {
    key: text('key').notNull(),
    result: text('result').notNull().$type<Result>(),
    type: text('type').notNull().$type<ResultMimeType>(),
    createdAt: integer('createdAt', { mode: 'timestamp_ms' })
      .notNull()
      .$defaultFn(() => new Date()),
    isDeleted: integer('isDeleted', { mode: 'boolean' }).default(false),
    deletedAt: integer('deletedAt', { mode: 'timestamp_ms' }),
    year: integer('year').notNull(),
  },
  (r) => [
    primaryKey({ columns: [r.key, r.result] }),
    index('result_key_idx').on(r.key),
    index('result_result_year_isDeleted_createdAt_idx').on(r.result, r.year, r.isDeleted, r.createdAt),
  ],
);
