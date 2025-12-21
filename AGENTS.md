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
