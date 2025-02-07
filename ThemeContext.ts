import { createContext } from 'react';

export const defaultThemeContext = {
  theme: 'light',
  toggleTheme: () => {},
};

const ThemeContext = createContext(defaultThemeContext);

export default ThemeContext;
