import React from 'react';

import { Container } from './styles';

import Header from './Header';
import Main from './Main';

import { useOpen } from '../../contexts/burguerOpen';
import Footer from './Footer';

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
