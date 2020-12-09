import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import checkEmailIsValid from "../../../utils/checkEmail";
import { handlerRegister } from "../../../services/user";
import { useErrorMessage } from "../../../contexts/error";
import { useSession } from "../../../contexts/session";
import { useLogin } from "../../../contexts/user";
import { useOpen } from "../../../contexts/burguerMenu";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";

import * as Styles from "./styles";

const SingUp: React.FC = () => {
  const history = useHistory();

  const { setOpenError, setMessageError } = useErrorMessage();
  const { setOpenSession } = useSession();
  const { setLoginToken } = useLogin();
  const { setOpen } = useOpen();

  const [loader, setLoader] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  //registrando usuario na base, caso não haja erro de validação
  const handleSubmit = async () => {
    setLoader(true);

    try {
      const user = await handlerRegister(credentials);
      setLoginToken(user.token);
      setOpenSession(true);
      setOpen(false);
      history.push("/category");
    } catch (err) {
      setLoader(false);
      setOpenError(true);
      setMessageError(err.response.data.message);
    }
  };

  //checando se os dados do input são vazios ou válidos
  const checkData = (event?: React.FormEvent) => {
    event?.preventDefault();

    if (!credentials.name || !credentials.password || !credentials.email) {
      setOpenError(true);
      setMessageError("It seems that you stopped writing some data 🤔");
    } else if (checkEmailIsValid(credentials.email)) {
      handleSubmit();
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
      <Styles.ContainerForm onSubmit={checkData}>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleInputChange}
        />
        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={handleInputChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") checkData();
          }}
        />
        <Styles.ContainerTermOfService>
          <input type="checkbox" name="terms of service" />
          <label>
            I agree all statements in <strong>terms of service</strong>
          </label>
        </Styles.ContainerTermOfService>

        {loader ? (
          <Styles.ContainerLoader>
            <Loader width={40} height={40} />
          </Styles.ContainerLoader>
        ) : (
          <Button type="submit">Sing Up</Button>
        )}
      </Styles.ContainerForm>
    </>
  );
};

export default SingUp;
