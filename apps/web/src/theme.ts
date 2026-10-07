export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'portfolio-theme';
export const SYSTEM_THEME_QUERY = '(prefers-color-scheme: dark)';

export const readThemePreference = (): Theme | null => {
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null;
  }
};

export const getSystemTheme = (): Theme =>
  window.matchMedia(SYSTEM_THEME_QUERY).matches ? 'dark' : 'light';

export const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
};

// Resolve the saved/system preference before React renders the page.
export const initializeTheme = () => applyTheme(readThemePreference() ?? getSystemTheme());
