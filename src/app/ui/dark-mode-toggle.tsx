'use client';

import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faComputer, faMobile } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
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
  const setInputState = (input: HTMLInputElement) => {
    input.checked = theme === 'dark';
    input.indeterminate = theme === 'system';
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

  const deviceIcon = isMobile ? faMobile : faComputer;

  return (
    <label className="dui-swap dui-swap-rotate" title={title(theme ?? 'light')}>
      <input
        id={'dark-mode-toggle'}
        type="checkbox"
        className={``}
        ref={(input) => {
          if (input) {
            setInputState(input);
          }
        }}
        onClick={() => {
          setTheme(nextTheme());
        }}
      />
      <FontAwesomeIcon icon={faSun} className={`dui-swap-off size-7 text-primary dark:text-bg-contrast`} />
      <FontAwesomeIcon
        icon={deviceIcon}
        className={`dui-swap-indeterminate size-7 text-primary dark:text-bg-contrast`}
      />
      <FontAwesomeIcon icon={faMoon} className={`dui-swap-on size-7 fill-current`} />
    </label>
  );
}
