import React from 'react';

import ThemeProvider from './contexts/theme';
import BurguerOpenProvider from './contexts/open';
import MessageErrorProvider from './contexts/messageError';

import { GlobalStyle } from './styles/GlobalStyles';

import Routes from './routes';

const App: React.FC = () => {

  return (
    <>
      <ThemeProvider>
        <BurguerOpenProvider>
          <MessageErrorProvider>
            <GlobalStyle />
            <Routes />
          </MessageErrorProvider>
        </BurguerOpenProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
