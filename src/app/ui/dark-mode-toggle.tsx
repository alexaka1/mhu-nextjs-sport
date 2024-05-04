'use client';

import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function DarkModeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <label className="dui-swap dui-swap-rotate" title={theme === 'dark' ? 'Világos mód' : 'Sötét mód'}>
      <input
        type="checkbox"
        className="hidden"
        value="dark"
        checked={currentTheme === 'dark'}
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
