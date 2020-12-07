import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { handleLogin } from "../../../services/authentication";
import { useErrorMessage } from "../../../contexts/error";
import { useSession } from "../../../contexts/session";
import { useLogin } from "../../../contexts/user";
import { useOpen } from "../../../contexts/burguerMenu";
import checkEmailIsValid from "../../../utils/checkEmail";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";

import { ContainerForm, ContainerSpiner } from "./styles";

const SingIn: React.FC = () => {
  const history = useHistory();

  const { setOpenError, setMessageError } = useErrorMessage();
  const { setOpenSession } = useSession();
  const { setLoginToken } = useLogin();
  const { setOpen } = useOpen();

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loader, setLoader] = useState(false);

  const handlerSubmit = async () => {
    setLoader(true);

    try {
      const user = await handleLogin(credentials);

      setLoginToken(user.token);
      setOpenSession(true);
      setOpen(false);
      history.push("/category");
    } catch (err) {
      setLoader(false);
      setOpenError(true);
      setMessageError(
        err.response?.data?.message || "Parece que correu um erro :("
      );
      console.log(err)
    }
  };

  //checando se os dados do input são vazios ou válidos
  const checkData = (event: React.FormEvent) => {
    event.preventDefault();

    if (credentials.password === "" || credentials.email === "") {
      setOpenError(true);
      setMessageError("It seems that you stopped writing some data 🤔");
    } else if (checkEmailIsValid(credentials.email)) {
      handlerSubmit();
    } else {
      setOpenError(true);
      setMessageError("Invalid Email 😥");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <>
      <ContainerForm onSubmit={checkData}>
        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={handleInputChange}
          className="email"
          value={credentials.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={credentials.password}
        />

        {loader ? (
          <ContainerSpiner>
            <Loader />
          </ContainerSpiner>
        ) : (
          <Button type="submit">Sing In</Button>
        )}
      </ContainerForm>
    </>
  );
};

export default SingIn;
