import React from 'react';

import ThemeProvider from './contexts/theme';
import BurguerOpenProvider from './contexts/burguerOpen';

import { GlobalStyle } from './styles/GlobalStyles';

import Routes from './routes';

const App: React.FC = () => {

  return (
    <>
      <ThemeProvider>
        <BurguerOpenProvider>
          <GlobalStyle />
          <Routes />
        </BurguerOpenProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
