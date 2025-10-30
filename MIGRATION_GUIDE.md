# Database Migration for better-auth

## Important: Data Preservation

This migration has been carefully designed to preserve ALL existing user data. No data will be lost during the migration process.

## What This Migration Does

The migration adds two new timestamp columns to existing tables:

- `createdAt` - timestamp when the record was created (default: current time)
- `updatedAt` - timestamp when the record was last updated (default: current time)

### Tables Modified:

1. **account** table: adds `createdAt` and `updatedAt` columns
2. **session** table: adds `createdAt` and `updatedAt` columns

### Existing Columns Preserved:

All existing columns are preserved through better-auth's field mapping feature:

- `sessionToken` → mapped to better-auth's `token` field
- `expires` → mapped to better-auth's `expiresAt` field
- `providerAccountId` → mapped to better-auth's `accountId` field
- `provider` → mapped to better-auth's `providerId` field
- `refresh_token` → mapped to better-auth's `refreshToken` field
- `access_token` → mapped to better-auth's `accessToken` field
- `expires_at` → mapped to better-auth's `accessTokenExpiresAt` field
- `id_token` → mapped to better-auth's `idToken` field
- `emailVerified` → mapped to better-auth's `emailVerified` field

## How to Apply the Migration

Run the following command in your production environment:

```bash
pnpm run db:migrate
```

Or manually apply the migration file:

```bash
drizzle-kit migrate
```

## Migration File Location

The migration SQL file is located at:

```
drizzle/0004_gray_paladin.sql
```

## Post-Migration Verification

After applying the migration, verify that:

1. All existing users can still log in
2. Session data is preserved
3. OAuth account linkages are intact

## Rollback (if needed)

If you need to rollback, you can remove the added columns with:

```sql
ALTER TABLE account DROP COLUMN createdAt;
ALTER TABLE account DROP COLUMN updatedAt;
ALTER TABLE session DROP COLUMN createdAt;
ALTER TABLE session DROP COLUMN updatedAt;
```

However, this should not be necessary as the migration is non-destructive.

## Configuration Changes

The better-auth configuration in `src/auth.ts` includes field mappings that ensure backward compatibility:

```typescript
session: {
  fields: {
    expiresAt: 'expires',
    token: 'sessionToken',
  },
},
account: {
  fields: {
    accountId: 'providerAccountId',
    providerId: 'provider',
    refreshToken: 'refresh_token',
    accessToken: 'access_token',
    accessTokenExpiresAt: 'expires_at',
    idToken: 'id_token',
  },
},
```

These mappings ensure that better-auth reads and writes to your existing database columns.
