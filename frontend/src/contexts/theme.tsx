import React, { createContext, useState, useContext } from 'react';

import { ThemeProvider as ThemeProviderStyled, DefaultTheme } from 'styled-components';

import light from '../styles/themes/light';
import usePersistedState from '../utils/usePersistedState';

interface PropsThemeContext {
  theme: DefaultTheme;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;  
}

const DEFAULT_VALUE = {
  theme: light,
  setTheme: () => {},
}

const ThemeContext = createContext<PropsThemeContext>( DEFAULT_VALUE );

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', DEFAULT_VALUE.theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProviderStyled theme={theme}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  const { theme, setTheme } = context;
  return { theme, setTheme };
}

