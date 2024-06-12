import { createContext, useContext } from 'react';
import { ColorMode, Color } from 'types/colors';

export interface ThemeProps {
  colorMode: ColorMode;
  setColorMode: (newValue: keyof Color) => void;
}

export const ThemeContext = createContext({} as ThemeProps);

export const useThemeContext = () => useContext(ThemeContext);
