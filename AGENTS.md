# AGENTS.md

## Build & Development Commands

- **Package manager:** `pnpm` (required, npm disabled)
- `pnpm dev` - Start dev server | `pnpm build` - Production build
- `pnpm lint` / `pnpm lint:fix` - ESLint | `pnpm fmt` / `pnpm fmt:fix` - Prettier
- `pnpm db:generate` - Drizzle migrations generation

## Code Style

- **TypeScript:** Strict mode, use `@/*` path alias for src imports
- **Imports:** Use `type` keyword for type-only imports (`import type { X }` or `import { type X }`)
- **Unused vars:** Prefix with `_` to ignore (e.g., `_unused`)
- **Formatting:** 2-space indent, single quotes, LF line endings, max 120 chars
- **Tailwind:** Used for styling; Prettier plugin auto-sorts classes

## Database (Drizzle + Turso)

- Always use `.where()` clause with `db.delete()` and `db.update()` - ESLint enforces this
- Schema files: `auth-schema.ts`, `src/app/db/schema.ts`

## Project Structure

- Next.js App Router with RSC | React 19 | shadcn/ui components in `src/components/ui/`
- `src/components/` is excluded from linting/formatting (shadcn generated code)
- Auth: better-auth | File uploads: UploadThing | Monitoring: Sentry + Axiom

## Cursor Cloud specific instructions

### Node.js version

The project requires **Node 24** (`engines.node: ^24.0.0`, `.node-version`). The VM may have `/exec-daemon/node` (v22) earlier on `PATH` than nvm. Before running any `pnpm` command:

```bash
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh" && nvm use
export PATH="$NVM_DIR/versions/node/$(node -v | tr -d v)/bin:$PATH"
```

Verify with `node -v` (should print v24.x).

### Environment variables

Copy `.env.example` to `.env.local` and fill required values (see `src/app/lib/env.ts`). For local DB without Turso cloud, use a file-backed libSQL URL:

```
TURSO_DATABASE_URL=file:local.db
TURSO_AUTH_TOKEN=local-dev-token
```

Set `UPLOADTHING_APP_ID=oeun8dfdch` so `next/image` remote patterns match hardcoded UploadThing assets in the UI.

`drizzle-kit` does not auto-load `.env.local`; source it before migrations:

```bash
set -a && source .env.local && set +a && pnpm db:migrate
```

Next.js dev/build loads `.env.local` automatically.

### Running the app

Single process — no Docker Compose. See standard commands above (`pnpm dev` on port 3000).

After first-time setup: `pnpm db:migrate` (with env sourced), then `pnpm dev`.

### Known local dev caveat

The landing page (`/` and `/2025`) can 500 in **dev** mode due to `next/image` remote host validation, even when `UPLOADTHING_APP_ID` is set correctly. Other routes (`/2025/sportagak`, `/2025/eredmenyek`, `/login`) work and are sufficient to verify the app. Production `pnpm build` + `pnpm start` does not exhibit this issue after a full build.

### Lint / test

- `pnpm lint` — ESLint (no test suite in repo)
- `pnpm fmt` — Prettier check (may warn on `renovate.json5` pre-existing formatting)
- `pnpm build` — full production build verification
