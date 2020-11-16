import React from 'react';

import { Container } from './styles';

import Nav from './Nav';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo /> 
      <Nav />
    </Container>
  );
};

export default React.memo(Header);
