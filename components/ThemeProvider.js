"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
});

const THEME_STORAGE_KEY = "tpp-theme";

function getPreferredTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("light");
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    setThemeState(preferredTheme);
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !hasHydrated) {
      return;
    }

    const handleMediaChange = (event) => {
      if (!window.localStorage.getItem(THEME_STORAGE_KEY)) {
        setThemeState(event.matches ? "dark" : "light");
      }
    };

    const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
    mediaQuery?.addEventListener?.("change", handleMediaChange);

    return () => mediaQuery?.removeEventListener?.("change", handleMediaChange);
  }, [hasHydrated]);

  useEffect(() => {
    if (typeof window === "undefined" || !hasHydrated) {
      return;
    }

    const resolvedTheme = theme === "dark" ? "dark" : "light";
    const root = document.documentElement;
    const body = document.body;
    const isDark = resolvedTheme === "dark";

    root.classList.toggle("dark", isDark);
    root.dataset.theme = resolvedTheme;
    body.classList.toggle("dark", isDark);
    body.dataset.theme = resolvedTheme;
    body.style.colorScheme = isDark ? "dark" : "light";

    window.localStorage.setItem(THEME_STORAGE_KEY, resolvedTheme);
  }, [theme, hasHydrated]);

  const setTheme = useCallback((nextTheme) => {
    setThemeState(nextTheme === "dark" ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme,
    }),
    [theme, toggleTheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
