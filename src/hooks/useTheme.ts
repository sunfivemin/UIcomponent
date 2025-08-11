import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

const THEME_KEY = 'theme';
const DEFAULT_THEME: Theme = 'dark';

const isValidTheme = (theme: string): theme is Theme =>
  theme === 'light' || theme === 'dark';

const getStoredTheme = (): Theme | null => {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(THEME_KEY);
    return stored && isValidTheme(stored) ? stored : null;
  } catch {
    return null;
  }
};

const setStoredTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.warn('Failed to save theme:', error);
  }
};

const updateDocumentTheme = (theme: Theme): void => {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  const setThemeHandler = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    updateDocumentTheme(newTheme);
    setStoredTheme(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeHandler(newTheme);
  }, [theme, setThemeHandler]);

  useEffect(() => {
    setMounted(true);
    const storedTheme = getStoredTheme();
    const initialTheme = storedTheme || DEFAULT_THEME;
    setTheme(initialTheme);
    updateDocumentTheme(initialTheme);
  }, []);

  if (!mounted) {
    return { theme: DEFAULT_THEME, toggleTheme: () => {} };
  }

  return { theme, toggleTheme };
};
