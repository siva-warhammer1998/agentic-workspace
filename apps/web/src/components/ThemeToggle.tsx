import { useEffect, useLayoutEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Icon from './Icon';
import {
  applyTheme, getSystemTheme, readThemePreference, SYSTEM_THEME_QUERY, THEME_STORAGE_KEY,
} from '../theme';
import type { Theme } from '../theme';

const ThemeToggle = () => {
  const [preference, setPreference] = useState<Theme | null>(readThemePreference);
  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme);
  const theme = preference ?? systemTheme;
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  useLayoutEffect(() => applyTheme(theme), [theme]);

  useEffect(() => {
    const media = window.matchMedia(SYSTEM_THEME_QUERY);
    const updateSystemTheme = () => setSystemTheme(media.matches ? 'dark' : 'light');
    const updateSavedTheme = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY || event.key === null) {
        setPreference(readThemePreference());
      }
    };

    updateSystemTheme();
    media.addEventListener('change', updateSystemTheme);
    window.addEventListener('storage', updateSavedTheme);
    return () => {
      media.removeEventListener('change', updateSystemTheme);
      window.removeEventListener('storage', updateSavedTheme);
    };
  }, []);

  const toggleTheme = () => {
    setPreference(nextTheme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The control still works for this visit when storage is unavailable.
    }
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
    >
      <Icon icon={nextTheme === 'dark' ? Moon : Sun} size="small" />
      <span>{nextTheme === 'dark' ? 'Dark theme' : 'Light theme'}</span>
    </button>
  );
};

export default ThemeToggle;
