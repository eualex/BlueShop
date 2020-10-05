import React from 'react';

import ThemeProvider from './contexts/theme';

import { GlobalStyle } from './styles/GlobalStyles';

import Home from './pages/Home';

const App: React.FC = () => {
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
