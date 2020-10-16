import React from "react";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { ContainerForm } from "./styles";

const SingIn: React.FC = () => {
  return (
    <>
      <ContainerForm>
        <Input name="email" type="email" labelName="E-mail" />
        <Input name="password" type="password" labelName="Password" />
      </ContainerForm>

      <Button>Sing In</Button>
    </>
  );
};

export default SingIn;
