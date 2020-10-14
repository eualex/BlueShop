import React from "react";

import {
  Container,
  Wrapper,
  ContainerLeft,
  ContainerRight,
  ContainerForm,
  ContainerStateForm,
  Image,
} from "./styles";

import LoginImg from "../../img/login01.svg";

import Button from "../../components/Button";
import Input from '../../components/Input';

const Login: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <ContainerLeft>
          <Image src={LoginImg} alt="Login" />

          <h1>Enter in Blue</h1>
        </ContainerLeft>

        <ContainerRight>
          <ContainerStateForm>
            <span>Sing Up</span>
            <span>Sing In</span>
          </ContainerStateForm>

          <span>
            <a href="">Sing In</a> or <a href="#">Sing Up</a>
          </span>

          <ContainerForm>
            <Input name="name" type="text" labelName="Name" />
            <Input name="email" type="email" labelName="E-mail" />
            <Input name="password" type="password" labelName="Password" />
          </ContainerForm>

          <span>
            <input type="checkbox" name="terms of service" />
            <label>
              I agree all statements in <strong>terms of service</strong>
            </label>
          </span>

          <Button>Sing Up</Button>
        </ContainerRight>
      </Wrapper>
    </Container>
  );
};

export default Login;
