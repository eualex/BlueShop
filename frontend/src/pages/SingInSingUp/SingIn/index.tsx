import React from "react";

import { useHistory } from "react-router-dom";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { ContainerForm } from "./styles";

const SingIn: React.FC = () => {
  const history = useHistory();

  const handlerRegister = () => {
    history.push("/main");
  }

  return (
    <>
      <ContainerForm>
        <Input name="email" type="email" labelName="E-mail" />
        <Input name="password" type="password" labelName="Password" />
      </ContainerForm>

      <Button onClick={handlerRegister}>Sing In</Button>
    </>
  );
};

export default SingIn;
