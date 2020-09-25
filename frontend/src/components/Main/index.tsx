import React from "react";

import Ilustration from '../../img/onlineShopping.svg';

import { Container, ContainerHeader, Button, Image, ContainerItens } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <ContainerHeader>
        <div>
          <h1>Fabric of the city</h1>
          <h2>Sale up to 50% off</h2>

          <span>
            <Button>Shop</Button>
          </span>
        </div>

        <Image src={Ilustration}/>
      </ContainerHeader>

      {/* <ContainerItens>
        <h1>New Arrivals</h1>
      </ContainerItens> */}
    </Container>
  );
};

export default Main;
