import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Main from '../../components/Main';

import { useOpen } from '../../contexts/burguerOpen';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  const { open } = useOpen();

  return (
    <Container open={open}>
      <Header />
      { open === false && 
        <>
          <Main />
          <Footer />
        </>
      }
    </Container>
  );
};

export default Home;
