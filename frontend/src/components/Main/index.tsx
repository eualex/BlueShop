import React from "react";

import Ilustration from "../../img/onlineShopping.svg";

import ImgProduct1 from "../../img/product1.png";
import ImgProduct2 from "../../img/product2.png";
import ImgProduct3 from "../../img/product3.png";

import BigProduct from "../BigProduct";

import {
  Container,
  ContainerHeader,
  Image,
  ContainerMain,
  ContainerNike
} from "./styles";

import { Button } from "../../styles/components";

const Main: React.FC = () => {
  const imagesProduct = [ImgProduct1, ImgProduct3];

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

        <Image src={Ilustration} />
      </ContainerHeader>

      <ContainerMain>
        <hr />
        <h1>New Products</h1>

        <div>
          <BigProduct image={ImgProduct2} title="The Best is back" price={100} reverse="row"/>
        </div>
        
        <ContainerNike>
          <hr/>
          <h1>Nike Session</h1>
          
          <BigProduct image={ImgProduct1} title="The most beautiful of Nike" price={100} reverse="row-reverse"/>
          <hr/>
          <BigProduct image={ImgProduct3} title="The second most beautiful of Nike" price={100} reverse="row"/>
        </ContainerNike>
        
      </ContainerMain>
    </Container>
  );
};

export default Main;
