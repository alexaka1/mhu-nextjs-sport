/**
 * Utility functions for managing last used login provider in localStorage
 */

import { useSyncExternalStore } from 'react';

const STORAGE_KEY = 'lastUsedLoginProvider';

/**
 * Get the last used login provider from localStorage
 * @returns The provider ID or null if not found
 */
export function getLastUsedProvider(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

/**
 * Set the last used login provider in localStorage
 * @param providerId The provider ID to store
 */
export function setLastUsedProvider(providerId: string): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, providerId);
  } catch {
    // Silently fail if localStorage is not available
  }
}

/**
 * Hook to get the last used login provider from localStorage
 * Uses useSyncExternalStore for proper React integration
 * @returns The provider ID or null if not found
 */
export function useLastUsedProvider(): string | null {
  return useSyncExternalStore(
    // Subscribe function - no-op since we don't need to listen to changes
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => () => {},
    getLastUsedProvider,
    () => null, // Server snapshot
  );
}
