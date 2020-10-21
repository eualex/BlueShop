import React from 'react';

import { Container } from './styles';

import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        BlueShop
      </Link>
    </Container>
  );
};

export default Logo;
