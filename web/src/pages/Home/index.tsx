import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Main from './Main';

import { useOpen } from '../../contexts/open';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  const { open } = useOpen();

  return (
    <Container open={open}>
      <Header />
      { !open && 
        <>
          <Main />
          <Footer />
        </>
      }
    </Container>
  );
};

export default Home;
