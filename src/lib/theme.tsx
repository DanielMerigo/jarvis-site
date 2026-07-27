"use client";

import { createContext, useCallback, useContext, useSyncExternalStore } from "react";

export type Theme = "dark" | "light";

// Runs inline in <body> BEFORE first paint: applies the saved theme (or the
// system preference, defaulting to dark) so the page never flashes the wrong
// theme. The provider below just reads back what this already decided.
export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem("jarvis-theme");var dark=s?s==="dark":!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches);document.documentElement.classList.toggle("dark",dark);}catch(e){}})();`;

// The <html> class list IS the source of truth — the inline script owns it
// before React boots. useSyncExternalStore subscribes to it instead of
// mirroring it into state inside an effect (which would cascade a render).
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// SSR and the very first client render use the layout's default: html.dark.
function getServerSnapshot(): Theme {
  return "dark";
}

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("jarvis-theme", next);
    listeners.forEach((listener) => listener());
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
