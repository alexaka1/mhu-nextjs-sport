import { integer, sqliteTable, text, primaryKey, index } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';
import { type Result, type ResultMimeType, type UserRolesType } from '@/app/lib/types';

export const users = sqliteTable(
  'user',
  {
    id: text('id').notNull().primaryKey(),
    name: text('name'),
    email: text('email').notNull(),
    emailVerified: integer('emailVerified', { mode: 'timestamp_ms' }),
    image: text('image'),
    isAdmin: integer('isAdmin').default(0),
    roles: text('roles', { mode: 'json' }).$type<UserRolesType>().default({ roles: [] }),
  },
  (table) => [index('user_email_idx').on(table.email)],
);

export const accounts = sqliteTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
    createdAt: integer('createdAt', { mode: 'timestamp_ms' })
      .notNull()
      .default(sql`1761839958376`)
      .$defaultFn(() => new Date()),
    updatedAt: integer('updatedAt', { mode: 'timestamp_ms' })
      .notNull()
      .default(sql`1761839958376`)
      .$defaultFn(() => new Date())
      .$onUpdate(() => new Date()),
  },
  (account) => [
    primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
    index('account_userId_idx').on(account.userId),
  ],
);

export const sessions = sqliteTable(
  'session',
  {
    sessionToken: text('sessionToken').notNull().primaryKey(),
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    expires: integer('expires', { mode: 'timestamp_ms' }).notNull(),
    createdAt: integer('createdAt', { mode: 'timestamp_ms' })
      .notNull()
      .default(sql`1761839958376`)
      .$defaultFn(() => new Date()),
    updatedAt: integer('updatedAt', { mode: 'timestamp_ms' })
      .notNull()
      .default(sql`1761839958376`)
      .$defaultFn(() => new Date())
      .$onUpdate(() => new Date()),
  },
  (table) => [index('session_userId_idx').on(table.userId), index('session_token_idx').on(table.sessionToken)],
);

export const verificationTokens = sqliteTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: integer('expires', { mode: 'timestamp_ms' }).notNull(),
  },
  (vt) => [primaryKey({ columns: [vt.identifier, vt.token] }), index('verification_identifier_idx').on(vt.identifier)],
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
  (r) => [primaryKey({ columns: [r.key, r.result] })],
);
