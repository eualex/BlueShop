import React from "react";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { ContainerForm, ConteinerTermOfService } from "./styles";

import { useHistory } from 'react-router-dom';

const SingUp: React.FC = () => {
  const history = useHistory();

  const handleLogin = () => {
    console.log('hello')
    
    history.push("/main");
  }

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

      <Button onClick={handleLogin}>Sing Up</Button>
    </>
  );
};

export default SingUp;
