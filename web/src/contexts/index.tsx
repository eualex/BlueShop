import React from "react";

import ThemeProvider from "./theme";
import CategoryProvider from "./category";
import BurguerOpenProvider from "./burguerMenu";
import MessageErrorProvider from "./error";
import MessageSuccessProvider from "./success";
import Messagesession from "./session";
import LoginProvider from "./user";
import SearchProduct from "./product";

const Contexts: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <CategoryProvider>
        <BurguerOpenProvider>
          <MessageErrorProvider>
            <MessageSuccessProvider>
              <Messagesession>
                <LoginProvider>
                  <SearchProduct>
                    {children}
                  </SearchProduct>
                </LoginProvider>
              </Messagesession>
            </MessageSuccessProvider>
          </MessageErrorProvider>
        </BurguerOpenProvider>
      </CategoryProvider>
    </ThemeProvider>
  );
};

export default Contexts;
