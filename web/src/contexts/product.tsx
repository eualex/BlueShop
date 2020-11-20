import React, { useState, useContext, createContext } from "react";
import usePersistedState from "../utils/usePersistedState";

interface PropsSearchProduct {
  category: string;
  id: string;
}

interface PropsContext {
  searchProduct: PropsSearchProduct;
  setSearchProduct: React.Dispatch<React.SetStateAction<PropsSearchProduct>>;
}

const DEFAULT_VALUE: PropsContext = {
  searchProduct: { category: "", id: "" },
  setSearchProduct: () => {},
};

const SearchProductContext = createContext<PropsContext>(DEFAULT_VALUE);

const SearchProductProvider: React.FC = ({ children }) => {
  const [searchProduct, setSearchProduct] = usePersistedState(
    "searchProduct",
    DEFAULT_VALUE.searchProduct
  );

  return (
    <SearchProductContext.Provider value={{ searchProduct, setSearchProduct }}>
      {children}
    </SearchProductContext.Provider>
  );
};

export default SearchProductProvider;

export const useSearchProduct = () => {
  const context = useContext(SearchProductContext);

  if (!context)
    throw new Error(
      "useSearchProduct must be used within a SearchProductProvider"
    );
  
  const { searchProduct, setSearchProduct } = context;

  return { searchProduct, setSearchProduct };
};
