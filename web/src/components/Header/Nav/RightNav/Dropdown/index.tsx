import React from "react";
import { useHistory } from "react-router-dom";
import { useCategory } from "../../../../../contexts/category";

import { Container } from "./styles";

interface PropsDropdown {
  name: string;
  items: string[];
  className?: string;
}

const Dropdown: React.FC<PropsDropdown> = ({ items, name, className }) => {
  const history = useHistory();
  const { setCategory } = useCategory();

  const toggleCategory = (item: string) => {
    setCategory({ name, item });
    history.push("main");
  };

  return (
    <Container className={className}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span
              className="item"
              onClick={() => toggleCategory(item.toLocaleLowerCase())}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Dropdown;
