import React from "react";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { ContainerForm, ConteinerTermOfService } from "./styles";

const SingUp: React.FC = () => {
  return (
    <>
      <ContainerForm>
        <Input name="name" type="text" labelName="Name" />
        <Input name="email" type="email" labelName="E-mail" />
        <Input name="password" type="password" labelName="Password" />
      </ContainerForm>

      <ConteinerTermOfService>
        <input type="checkbox" name="terms of service" />
        <label>
          I agree all statements in <strong>terms of service</strong>
        </label>
      </ConteinerTermOfService>

      <Button>Sing Up</Button>
    </>
  );
};

export default SingUp;
