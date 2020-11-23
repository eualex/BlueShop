import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

import Button from '../../../components/Button';

import * as Styles from './styles';

import Ilustration from "../../../img/onlineShopping.svg";

const HeaderMain: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);

  return (
    <Styles.ContainerHeader>
      <div>
        <div data-aos="fade-right">
          <h1>Fabric of the city</h1>
          <h2>Sale up to 50% off</h2>

          <span>
            <Button link="category">
              Shop
            </Button>
          </span>
        </div>

        <Styles.Image data-aos="fade-left" src={Ilustration} />
      </div>
    </Styles.ContainerHeader>
  );
};

export default HeaderMain;
