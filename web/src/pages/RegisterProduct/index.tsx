import React, { useEffect } from "react";

import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  Container,
  Wrapper,
  ContainerTop,
  ContainerBottom,
  Image,
} from "./styles";

import SingInImg from "../../img/register_product.svg";

import ErrorMessage from "../../components/ErrorMessage";
import SuccessMessage from "../../components/SuccessMessage";
import FormRegisterProduct from './FormRegisterProduct';

const RegisterProduct: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);

  return (
    <Container>
      <ErrorMessage />
      <SuccessMessage />
      <Wrapper>
        <ContainerTop>
          <Image data-aos="fade-right" src={SingInImg} alt="Register Product"/>
          <h1 data-aos="fade-left">Register a Product</h1>
        </ContainerTop>

        <ContainerBottom>
          <FormRegisterProduct />
        </ContainerBottom>
      </Wrapper>
    </Container>
  );
};

export default RegisterProduct;
