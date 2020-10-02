import React from "react";

import { Container, ContainerNav } from "./styles";

interface Props {
  open: boolean;
}

const RightNav: React.FC<Props> = ({ open }) => {
  return (
    <Container open={open}>
      <ContainerNav>
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
      </ContainerNav>

      <span>
        <a href="#">Login</a>
      </span>
    </Container>
  );
};

export default RightNav;
