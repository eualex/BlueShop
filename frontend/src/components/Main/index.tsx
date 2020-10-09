import React, { useEffect } from "react";

import Aos from 'aos';
import 'aos/dist/aos.css';

import Ilustration from "../../img/onlineShopping.svg";
import ImgProduct1 from "../../img/product1.png";
import ImgProduct2 from "../../img/product2.png";
import ImgProduct3 from "../../img/product3.png";

import BigProduct from "../BigProduct";

import { useOpen } from '../../contexts/burguerOpen';

import {
  Container,
  ContainerHeader,
  Image,
  ContainerMain,
  ContainerNike,
} from "./styles";

import Button from "../Button";

const Main: React.FC = () => {
  const { open } = useOpen();

  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, [])

  return (
    <Container open={open}>
      <ContainerHeader>
        <div>
          <div data-aos="fade-right">
            <h1>Fabric of the city</h1>
            <h2>Sale up to 50% off</h2>

            <span>
              <Button>Shop</Button>
            </span>
          </div>

          <Image data-aos="fade-left" src={Ilustration} />
        </div>
      </ContainerHeader>
      
      <ContainerMain>
        
        <hr />
        <h1>New Products</h1>

        <div className="container-product">
          <div data-aos="fade-right">
            <h1>
              Teste
            </h1>
          </div>
          <BigProduct
            image={ImgProduct2}
            title="The Best is back"
            price={100}
          />
        </div>

       
        <ContainerNike>
          <hr />
          <h1>Nike Session</h1>

          <div className="container-product">
            <BigProduct
              image={ImgProduct1}
              title="The most beautiful of Nike"
              price={199.99}
              reverse="row-reverse"
            />
          </div>

          <hr />

          <div className="container-product">
            <BigProduct
              image={ImgProduct3}
              title="The second most beautiful of Nike"
              price={149.99}
            />
          </div>
        </ContainerNike>
      </ContainerMain>
    </Container>
  );
};

export default Main;
