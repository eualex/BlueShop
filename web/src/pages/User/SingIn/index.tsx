import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../../services/api";
import { useErrorMessage } from "../../../contexts/error";
import checkEmailIsValid from "../../../utils/checkEmail";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";

import { ContainerForm, ContainerSpiner } from "./styles";

const SingIn: React.FC = () => {
  const history = useHistory();

  const { setOpenError, setMessageError } = useErrorMessage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const handlerLogin = async () => {
    setLoader(true);

    await api
      .post("/auth", { email, password })
      .then((res) => history.push("/main"))
      .catch((err) => {
        setLoader(false);
        setOpenError(true);
        setMessageError(
          err.response?.data?.message || "Parece que correu um erro :("
        );

        console.log(err.response.data);
      });
  
  };

  //checando se os dados do input são vazios ou válidos
  const checkData = () => {
    if (password === "" || email === "") {
      setOpenError(true);
      setMessageError("It seems that you stopped writing some data 🤔");
    }

    else if (checkEmailIsValid(email)) {
      handlerLogin();
    } else {
      // console.log(email)
      setOpenError(true);
      setMessageError("Invalid Email 😥");
    }
  };

  return (
    <>
      <ContainerForm >
        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          className="email"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </ContainerForm>

      {loader ? (
        <ContainerSpiner>
          <Loader />
        </ContainerSpiner>
      ) : (
        <Button onClick={checkData}>Sing In</Button>
      )}
    </>
  );
};

export default SingIn;
