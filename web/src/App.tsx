import React from "react";
import { Provider } from "react-redux";

import store from './store';

import ThemeProvider from "./contexts/theme";
import BurguerOpenProvider from "./contexts/open";
import MessageErrorProvider from "./contexts/messageError";

import { GlobalStyle } from "./styles/GlobalStyles";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <BurguerOpenProvider>
            <MessageErrorProvider>
              <GlobalStyle />
              <Routes />
            </MessageErrorProvider>
          </BurguerOpenProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
