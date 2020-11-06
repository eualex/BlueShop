import React, { useEffect } from "react";

import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  Container,
  Wrapper,
  ContainerLeft,
  ContainerRight,
  Image,
} from "./styles";

import SingInImg from "../../img/register_product.svg";

import ErrorMessage from "../../components/ErrorMessage";
import FormRegisterProduct from './FormRegisterProduct';

const RegisterProduct: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);

  return (
    <Container>
      <ErrorMessage />
      <Wrapper>
        <ContainerLeft>
          <Image data-aos="fade-up" src={SingInImg} alt="Register Product"/>
          <h1>Register a Product</h1>
        </ContainerLeft>

        <ContainerRight>
          <FormRegisterProduct />
        </ContainerRight>
      </Wrapper>
    </Container>
  );
};

export default RegisterProduct;
