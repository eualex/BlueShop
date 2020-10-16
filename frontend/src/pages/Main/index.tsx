import React from 'react';
import Header from '../../components/Header';
import Aside from './Aside';

import { Container, Input, ContainerInput, Wrapper, ContainerProducts } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />

      <ContainerInput>
        <Input type="text" name="search" placeholder="Search..." />
      </ContainerInput>

      {/* <hr/> */}

      <Wrapper>
        <Aside />

        <ContainerProducts>

        </ContainerProducts>

      </Wrapper>
      
    </Container>
  );
};

export default Main;
