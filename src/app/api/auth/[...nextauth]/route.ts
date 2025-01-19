import { handlers } from '@/app/lib/auth'; // Referring to the auth.ts we just created
export const { GET, POST } = handlers;
export const runtime = 'edge'; // optional
