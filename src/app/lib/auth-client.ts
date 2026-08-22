import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient();

export const { signIn, signOut, useSession } = authClient;
export type SignInMethods = Extract<keyof typeof signIn, string>;
