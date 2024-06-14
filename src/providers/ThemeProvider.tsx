import { useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { COLOR_MODE_KEY, COLORS_ALL } from 'constants/colors';
import { ThemeContext } from 'contexts/themeContext';
import type { ColorMode } from 'types/colors';

const updateRootColors = (newValue: ColorMode) => {
  const root = window.document.documentElement;
  Object.entries(COLORS_ALL).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;
    if (colorByTheme[newValue]) {
      root.style.setProperty(cssVarName, colorByTheme[newValue]);
    } else {
      root.style.removeProperty(cssVarName);
    }
  });
};

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMQ = mql.matches;
    const persistedPreference = localStorage.getItem(COLOR_MODE_KEY);

    let initialColorValue: ColorMode;
    if (persistedPreference) {
      initialColorValue = persistedPreference as ColorMode;
    } else {
      initialColorValue = prefersDarkFromMQ ? 'dark' : 'light';
    }

    if (initialColorValue) {
      setColorMode(initialColorValue);
      updateRootColors(initialColorValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(COLOR_MODE_KEY, colorMode);
    updateRootColors(colorMode);
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      <StyledThemeProvider theme={{ colorMode }}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
