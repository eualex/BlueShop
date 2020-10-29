import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../../services/api";
import { useOpen } from "../../../contexts/open";
import { useMessage } from "../../../contexts/messageError";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { ContainerForm } from "./styles";

const SingIn: React.FC = () => {
  const history = useHistory();

  const { setOpenMessage } = useOpen();
  const { setMessageError } = useMessage(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerRegister = async () => {
    await api
      .post("/auth", {
        email,
        password,
      })
      .catch((err) => {
        setOpenMessage(true);
        setMessageError(err.response.data.message);
      });

    // history.push("/main");
  };

  return (
    <>
      <ContainerForm>
        <Input
          name="email"
          type="text"
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

      <Button onClick={handlerRegister}>Sing In</Button>
    </>
  );
};

export default SingIn;
