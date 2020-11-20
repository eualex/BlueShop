import React from "react";

import ThemeProvider from "./theme";
import CategoryProvider from "./category";
import BurguerOpenProvider from "./burguerMenu";
import MessageErrorProvider from "./error";
import MessageSuccessProvider from "./success";
import MessageSessionUser from "./sessionUser";
import LoginProvider from "./login";
import SearchProduct from "./product";

const Contexts: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <CategoryProvider>
        <BurguerOpenProvider>
          <MessageErrorProvider>
            <MessageSuccessProvider>
              <MessageSessionUser>
                <LoginProvider>
                  <SearchProduct>
                    {children}
                  </SearchProduct>
                </LoginProvider>
              </MessageSessionUser>
            </MessageSuccessProvider>
          </MessageErrorProvider>
        </BurguerOpenProvider>
      </CategoryProvider>
    </ThemeProvider>
  );
};

export default Contexts;
