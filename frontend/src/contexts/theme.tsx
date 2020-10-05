import React, { createContext, useState, useContext } from 'react';

import { ThemeProvider as ThemeProviderStyled } from 'styled-components';

// import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ThemeType {
  title: string;

  colors: {
    primary: string;
    background: string;
    backgroundSecondary: string;

    textPrimary: string;
    textSecondary: string;
    textTerceary: string;
    textQuartenary: string;
  }
}

// interface PropsThemesType {
//   light: ThemeType;
//   dark: ThemeType;
// }

interface PropsThemeContext {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;  
}

const DEFAULT_VALUE = {
  theme: light,
  setTheme: () => {},
}

const ThemeContext = createContext<PropsThemeContext>( DEFAULT_VALUE );

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_VALUE.theme);

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

