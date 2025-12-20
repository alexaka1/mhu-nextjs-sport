'use client';

import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faComputer, faMobile } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  // This is the recommended pattern for next-themes to avoid hydration mismatches
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same structure to avoid layout shift
    return (
      <button
        className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        title="Téma váltás"
        disabled
      >
        <FontAwesomeIcon icon={faSun} className="text-primary dark:text-primary-200 size-6 opacity-50" />
      </button>
    );
  }

  const nextTheme = () => {
    switch (theme) {
      case 'dark':
        return 'light';
      case 'light':
        return 'system';
      case 'system':
        return 'dark';
      default:
        return 'system';
    }
  };

  const title = (theme: string) => {
    switch (theme) {
      case 'dark':
        return 'Világos téma';
      case 'light':
        return 'Rendszer téma';
      case 'system':
        return 'Sötét téma';
      default:
        return 'Ismeretlen mód';
    }
  };

  const currentIcon = () => {
    if (theme === 'dark') return faMoon;
    if (theme === 'light') return faSun;
    return isMobile ? faMobile : faComputer;
  };

  return (
    <button
      onClick={() => {
        setTheme(nextTheme());
      }}
      className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
      title={title(theme ?? 'light')}
      type="button"
    >
      <FontAwesomeIcon icon={currentIcon()} className="text-primary dark:text-primary-200 size-6" />
    </button>
  );
}
