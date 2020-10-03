import React from 'react';
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/GlobalStyles';
import light from './styles/themes/light';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
