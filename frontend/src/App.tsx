import React, { useState, useCallback } from 'react';

import ThemeProvider from './contexts/theme';

import { GlobalStyle } from './styles/GlobalStyles';
// import light from './styles/themes/light';
// import dark from './styles/themes/dark';

import Home from './pages/Home';

const App: React.FC = () => {
  // const [ theme, setTheme ] = useState(light);

  // const toggleTheme = useCallback(() => {
  //   setTheme(theme.title === 'light' ? dark : light);
  // }, [])

  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
