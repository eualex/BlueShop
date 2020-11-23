import React, { createContext, useContext } from "react";
import usePersistedState from "../utils/usePersistedState";

interface PropsCategory {
  name: string;
  item: string;
}

interface ContextProps {
  category: PropsCategory;
  setCategory: React.Dispatch<React.SetStateAction<PropsCategory>>;
}

const DEFAULT_VALUE = {
  category: { name: "", item: "" },
  setCategory: () => {},
};

const CategoryContext = createContext<ContextProps>(DEFAULT_VALUE);

const CategoryProvider: React.FC = ({ children }) => {
  const [category, setCategory] = usePersistedState(
    "category",
    DEFAULT_VALUE.category
  );

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;

export const useCategory = () => {
  const context = useContext(CategoryContext);

  if (!context)
    throw new Error("useCategory must be used within a CategoryProvider");

  const { category, setCategory } = context;
  return { category, setCategory };
};
