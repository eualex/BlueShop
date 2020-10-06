import React from 'react';

import ThemeProvider from './contexts/theme';
import BurguerOpenProvider, { useOpen } from './contexts/burguerOpen';

import { GlobalStyle } from './styles/GlobalStyles';

import Home from './pages/Home';

const App: React.FC = () => {
  const { open } = useOpen();

  return (
    <>
      <ThemeProvider>
        <BurguerOpenProvider>
          <GlobalStyle open={open}/>
          <Home />
        </BurguerOpenProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
