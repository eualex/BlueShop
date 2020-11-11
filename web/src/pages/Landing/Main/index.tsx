import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

import BigProduct from "../BigProduct";
import HeaderMain from "./HeaderMain";

import ImgProduct1 from "../../../img/product1.png";
import ImgProduct2 from "../../../img/product2.png";
import ImgProduct3 from "../../../img/product3.png";

import { useOpen } from '../../../contexts/BurguerMenu';

import * as Styles from "./styles";

const Main: React.FC = () => {
  const { open } = useOpen();

  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, [])

  return (
    <Styles.Container open={open}>
      <HeaderMain />
      
      <Styles.ContainerMain>
        <hr />
        <h1>New Products</h1>

        <div className="container-product">
          <BigProduct
            image={ImgProduct2}
            title="The Best is back"
            price={100}
          />
        </div>
       
        <Styles.ContainerNike>
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
        </Styles.ContainerNike>
      </Styles.ContainerMain>
    </Styles.Container>
  );
};

export default Main;
