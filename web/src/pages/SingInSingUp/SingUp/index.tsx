import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../../services/api";
import { useOpen } from "../../../contexts/open";
import { useMessage } from "../../../contexts/messageError";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { ContainerForm, ConteinerTermOfService } from "./styles";

const SingUp: React.FC = () => {
  const history = useHistory();

  const { setOpenMessage } = useOpen();
  const { setMessageError } = useMessage();
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [error, setError] = useState("");

  const handleLogin = async () => {
    await api.post('/users', {
      name,
      email,
      password
    })
    .then(res => console.log(res.data))
    .catch(err => {
      setOpenMessage(true);
      setMessageError(err.response.data.message);
      console.log(err.response.data);
    })

    // history.push("/main");
  };

  return (
    <>
      <ContainerForm>
        
        <Input
          name="name"
          type="text"
          labelName="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="email"
          type="email"
          labelName="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          labelName="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
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
