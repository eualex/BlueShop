import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../../services/api";
import { useOpen } from "../../../contexts/open";
import { useMessage } from "../../../contexts/messageError";
import checkEmailIsValid from "../../../utils/checkEmail";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";

import { ContainerForm, ContainerSpiner } from "./styles";

interface dataUserProps {
  email?: string;
  password?: string;
}

const SingIn: React.FC = () => {
  const history = useHistory();

  const { setOpenMessage } = useOpen();
  const { setMessageError } = useMessage();

  const [loader, setLoader] = useState(false);

  const [dataUser, setDataUser] = useState<dataUserProps>({
    email: "",
    password: "",
  });

  const [emailIsValid, setEmailIsValid] = useState<boolean>();

  const toggleEmail = (email: string) => {
    setEmailIsValid(checkEmailIsValid(email));
    if (emailIsValid) setDataUser({ email });
  };

  const handlerLogin = async () => {
    checkData(dataUser);

    if (emailIsValid) {
      await api
        .post("/auth", { email: dataUser.email, password: dataUser.password })
        .then((res) => history.push("/main"))
        .catch((err) => {
          setLoader(false);
          setOpenMessage(true);
          setMessageError(
            err.response?.data?.message || "Parece que correu um erro :("
          );

          console.log(err.response.data)
        });
    }
  };

  //checando se os dados do input são vazios
  const checkData = (data: dataUserProps) => {
    Object.values(data).map( d => {
      if (d === "") {
        setOpenMessage(true);
        setMessageError("Parece que você deixou de escrever alguns dados 🤔");
      } else setLoader(true);
    })
  };

  return (
    <>
      <ContainerForm error={emailIsValid === undefined ? true : emailIsValid}>
        <Input
          name="email"
          type="text"
          labelName="E-mail"
          onChange={(e) => toggleEmail(e.target.value)}
          className="email"
        />
        <Input
          name="password"
          type="password"
          labelName="Password"
          onChange={(e) => setDataUser({ password: e.target.value })}
        />
      </ContainerForm>

      {loader ? (
        <ContainerSpiner>
          <Loader />
        </ContainerSpiner>
      ) : (
        <Button onClick={handlerLogin}>Sing In</Button>
      )}
    </>
  );
};

export default SingIn;
