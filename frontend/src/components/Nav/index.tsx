import React from "react";
import { Container, ContainerNav, ContainerMenuToggle } from "./styles";

const Nav: React.FC = () => {
  return (
    <Container>
      <div className="container-toggle on">
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
      </div>

      <ContainerMenuToggle>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </ContainerMenuToggle>
    </Container>
  );
};

export default Nav;
