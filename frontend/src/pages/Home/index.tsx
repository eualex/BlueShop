import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import MainHome from '../../components/MainHome';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainHome />
    </Container>
  );
};

export default Home;
