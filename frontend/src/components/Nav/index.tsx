import React from 'react';
import { Container, ContainerNav, IconShop } from './styles';

const Nav: React.FC = () => {
  return (
    <Container>
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
        <IconShop />
        {/* <IconSearch /> */}
        <a href="#">Login</a>
      </span>
    </Container>
  );
}

export default Nav;
