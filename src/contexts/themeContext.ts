import { createContext, useContext } from 'react';
import { ColorMode } from 'types/colors';

export interface ThemeProps {
  colorMode: ColorMode;
  setColorMode: (newValue: ColorMode) => void;
}

export const ThemeContext = createContext<ThemeProps>({} as ThemeProps);

export const useThemeContext = () => useContext(ThemeContext);
