import React from "react";

import Ilustration from '../../img/onlineShopping.svg';

import { Container, ContainerMain, Button, Image, ContainerItens } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <ContainerMain>
        <div>
          <h1>Fabric of the city</h1>
          <h2>Sale up to 50% off</h2>

          <span>
            <Button>Clothes</Button>
            <Button>Food</Button>
          </span>
        </div>

        <Image src={Ilustration}/>
      </ContainerMain>

      {/* <ContainerItens>
        <h1>New Arrivals</h1>
      </ContainerItens> */}
    </Container>
  );
};

export default Main;
