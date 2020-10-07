import React from 'react';

import ThemeProvider from './contexts/theme';
import BurguerOpenProvider from './contexts/burguerOpen';

import { GlobalStyle } from './styles/GlobalStyles';

import Home from './pages/Home';

const App: React.FC = () => {

  return (
    <>
      <ThemeProvider>
        <BurguerOpenProvider>
          <GlobalStyle />
          <Home />
        </BurguerOpenProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
