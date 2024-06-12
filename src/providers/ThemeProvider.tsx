import { useEffect, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider, ThemeContext } from 'styled-components';
import { COLOR_MODE_KEY, COLORS_ALL } from 'constants/colors';
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
  const [colorMode, rawSetColorMode] = useState<ColorMode>('light');

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
      rawSetColorMode(initialColorValue);
      updateRootColors(initialColorValue);
    }
  }, []);

  const contextValue = useMemo(() => {
    function setColorMode(newValue: ColorMode) {
      localStorage.setItem(COLOR_MODE_KEY, newValue);
      updateRootColors(newValue);
      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={{ colorMode }}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
