import React from "react";
import Header from "../../components/Header";
import Product from "../../components/Product";
import Aside from "./Aside";

import {
  Container,
  Input,
  ContainerInput,
  Wrapper,
  ContainerProducts,
} from "./styles";

import ImgProductAdidas from "../../img/svgtenis/adidas.svg";

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
          <Product 
            description="NMD City Sock 2" 
            img={ImgProductAdidas}
            price={100}
            title="Adidas"
          />
          <Product 
            description="NMD City Sock 2" 
            img={ImgProductAdidas}
            price={100}
            title="Adidas"
          />
          <Product 
            description="NMD City Sock 2" 
            img={ImgProductAdidas}
            price={100}
            title="Adidas"
          />
          <Product 
            description="NMD City Sock 2" 
            img={ImgProductAdidas}
            price={100}
            title="Adidas"
          />
          <Product 
            description="NMD City Sock 2" 
            img={ImgProductAdidas}
            price={100}
            title="Adidas"
          />
          <Product 
            description="NMD City Sock 2" 
            img={ImgProductAdidas}
            price={100}
            title="Adidas"
          />
          <Product 
            description="NMD City Sock 2" 
            img={ImgProductAdidas}
            price={100}
            title="Adidas"
          />
          <Product 
            description="NMD City Sock 2" 
            img={ImgProductAdidas}
            price={100}
            title="Adidas"
          />
          <Product 
            description="NMD City Sock 2" 
            img={ImgProductAdidas}
            price={100}
            title="Adidas"
          />
        </ContainerProducts>
      </Wrapper>
    </Container>
  );
};

export default Main;
