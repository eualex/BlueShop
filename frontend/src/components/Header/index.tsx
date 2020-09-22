import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>
          <span><FaShoppingCart /></span>
          BlueShop
        </h1>
        
        <span>
          <a href="#">login</a>
          <a href="#">cadastro</a>
        </span>
      </div>

    </Container>
  );
};

export default Header;
