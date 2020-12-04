import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../../services/api";
import checkEmailIsValid from "../../../utils/checkEmail";
import { useErrorMessage } from "../../../contexts/error";
import { useSessionUser } from "../../../contexts/sessionUser";
import { useLogin } from "../../../contexts/user";
import { useOpen } from "../../../contexts/burguerMenu";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";

import {
  ContainerForm,
  ConteinerTermOfService,
  ContainerLoader,
} from "./styles";

const SingUp: React.FC = () => {
  const history = useHistory();

  const { setOpenError, setMessageError } = useErrorMessage();
  const { setLoginToken, setUserData } = useLogin();
  const { setOpenSession } = useSessionUser();
  const { setOpen } = useOpen();

  const [loader, setLoader] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //registrando usuario na base, caso não haja erro de validação
  const handleRegister = async () => {
    setLoader(true);

    await api
      .post("/users", { name, email, password })
      .then((res) => {
        const { token } = res.data;
        setLoginToken(token);
        setUserData({ email, name });
        setOpenSession(true);
        setOpen(false);
        history.push("/category");
      })
      .catch((err) => {
        setLoader(false);
        setOpenError(true);
        setMessageError(err.response.data.message);
      });
  };

  //checando se os dados do input são vazios ou válidos
  const checkData = () => {
    if (!name || !password || !email) {
      setOpenError(true);
      setMessageError("It seems that you stopped writing some data 🤔");
    } else if (checkEmailIsValid(email)) {
      handleRegister();
    } else {
      setOpenError(true);
      setMessageError("Invalid Email 😥");
    }
  };

  return (
    <>
      <ContainerForm>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") checkData();
          }}
        />
      </ContainerForm>

      <ConteinerTermOfService>
        <input type="checkbox" name="terms of service" />
        <label>
          I agree all statements in <strong>terms of service</strong>
        </label>
      </ConteinerTermOfService>

      {loader ? (
        <ContainerLoader>
          <Loader width={40} height={40} />
        </ContainerLoader>
      ) : (
        <Button onClick={checkData}>Sing Up</Button>
      )}
    </>
  );
};

export default SingUp;
