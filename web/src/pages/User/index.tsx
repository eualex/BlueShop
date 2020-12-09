import React, { useState, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

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

import SingUp from "./Register";
import SingIn from "./Login";

const Login: React.FC = () => {
  const [singIn, setSingIn] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);

  return (
    <Container>
      <Wrapper>
        <ContainerLeft>
          {singIn && <Image data-aos="fade-up" src={SingInImg} alt="Login" />}
          {!singIn && (
            <Image data-aos="fade-up" src={SingUpImg} alt="register" />
          )}

          <h1>Join Blue</h1>
        </ContainerLeft>

        <ContainerRight>
          <ContainerStateSing stateSing={singIn}>
            <span onClick={() => setSingIn(true)}>
              Log In <span className="login-bottom" />
            </span>
            <span>or</span>
            <span onClick={() => setSingIn(false)}>
              Register <span className="register-bottom" />
            </span>
          </ContainerStateSing>

          {singIn && <SingIn />}
          {!singIn && <SingUp />}
        </ContainerRight>
      </Wrapper>
    </Container>
  );
};

export default Login;
