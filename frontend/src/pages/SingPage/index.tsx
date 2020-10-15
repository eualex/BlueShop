import React, { useState } from "react";

import {
  Container,
  Wrapper,
  ContainerLeft,
  ContainerRight,
  ContainerStateSing,
  Image,
} from "./styles";

import SingInImg from "../../img/login01.svg";
import SingUpImg from "../../img/register.svg";

import SingUp from "./SingUp";
import SingIn from "./SingIn";

const Login: React.FC = () => {
  const [singIn, setSingIn] = useState(true);

  return (
    <Container>
      <Wrapper>
        <ContainerLeft>
          {singIn ? <Image src={SingInImg} alt="Login" /> : <Image src={SingUpImg} alt="register" />}

          <h1>Join Blue</h1>
        </ContainerLeft>

        <ContainerRight>
          <ContainerStateSing stateSing={singIn}>
            <span
              onClick={() => setSingIn(true)}
            >
              Sing In
            </span>{" "}
            or{" "}
            <span
              onClick={() => setSingIn(false)}
            >
              Sing Up
            </span>
          </ContainerStateSing>

          {singIn ? <SingIn /> : <SingUp />}
        </ContainerRight>
      </Wrapper>
    </Container>
  );
};

export default Login;
