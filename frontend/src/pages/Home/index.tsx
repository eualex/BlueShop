import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Main from '../../components/Main';

import { useOpen } from '../../contexts/burguerOpen';

const Home: React.FC = () => {
  const { open } = useOpen();

  return (
    <Container open={open}>
      <Header />
      <Main />
    </Container>
  );
};

export default Home;
