import React from "react";

import ThemeProvider from './theme';
import BurguerOpenProvider from "./BurguerMenu";
import MessageErrorProvider from "./error";
import MessageSuccessProvider from "./success";

const Contexts: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <BurguerOpenProvider>
        <MessageErrorProvider>
          <MessageSuccessProvider>
            {children}
          </MessageSuccessProvider>
        </MessageErrorProvider>
      </BurguerOpenProvider>
    </ThemeProvider>
  );
};

export default Contexts;
