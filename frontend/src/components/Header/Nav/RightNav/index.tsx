import React from "react";

import { ContainerNav } from "./styles";

interface Props {
  open: boolean;
}

const RightNav: React.FC<Props> = ({ open }) => {
  return (
    <ContainerNav open={open}>
      <ul>
        <li>
          <a href="#">Woman</a>
        </li>
        <li>
          <a href="#">Man</a>
        </li>
        <li>
          <a href="#">Delivery</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>

      <span>
        <a href="#">Login</a>
      </span>
    </ContainerNav>
  );
};

export default RightNav;
