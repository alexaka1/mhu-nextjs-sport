'use client';

import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export default function DarkModeToggle() {
  const { setTheme, systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  useEffect(() => {
    if (currentTheme === 'dark') {
      const toggle = document.getElementById('dark-mode-toggle') as HTMLInputElement | null;
      if (toggle && !toggle.checked) {
        toggle.click();
      }
    }
  }, []);
  return (
    <label className="dui-swap dui-swap-rotate" title={'Sötét/Világos mód'}>
      <input
        id={'dark-mode-toggle'}
        type="checkbox"
        className="hidden"
        value="dark"
        onChange={(v) => {
          if (v.target.checked) {
            setTheme('dark');
          } else {
            setTheme('light');
          }
        }}
      />
      <FontAwesomeIcon icon={faSun} className={`dui-swap-off size-7 text-primary`} />
      <FontAwesomeIcon icon={faMoon} className={`dui-swap-on size-7 fill-current`} />
    </label>
  );
}
