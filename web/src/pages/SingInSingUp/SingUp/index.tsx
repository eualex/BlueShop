import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../../services/api";
import { useOpen } from "../../../contexts/open";
import { useMessage } from "../../../contexts/messageError";
import checkEmailIsValid from "../../../utils/checkEmail";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";

import {
  ContainerForm,
  ConteinerTermOfService,
  ContainerLoader,
} from "./styles";

interface dataUserProps {
  name?: string;
  email?: string;
  password?: string;
}

const SingUp: React.FC = () => {
  const history = useHistory();

  const { setOpenMessage } = useOpen();
  const { setMessageError } = useMessage();

  const [loader, setLoader] = useState(false);

  const [dataUser, setDataUser] = useState<dataUserProps>({
    name: "",
    email: "",
    password: "",
  });

  const [emailIsValid, setEmailIsValid] = useState<boolean>();
  const [classinvalidData, setClassInvalidData] = useState("");
  
  //validando email
  const toggleEmail = (email: string) => {
    setEmailIsValid(checkEmailIsValid(email));
    if (emailIsValid) setDataUser({ email });
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
 
  //registrando usuario na base, caso não haja erro de validação
  const handleLogin = async () => {
    checkData(dataUser);

    if (emailIsValid) {
      await api
        .post("/users", dataUser)
        .then((res) => history.push("/main"))
        .catch((err) => {
          setLoader(false);
          setOpenMessage(true);
          setMessageError(err.response?.data?.message);
          console.log(err.response.data)
        });
    }
  };

  return (
    <>
      <ContainerForm error={emailIsValid === undefined ? true : emailIsValid}>
        <Input
          name="name"
          type="text"
          labelName="Name"
          onChange={(e) => setDataUser({ name: e.target.value })}
          className={classinvalidData} 
        />
        <Input
          name="email"
          type="text"
          labelName="E-mail"
          onChange={(e) => toggleEmail(e.target.value)}
          className={`email ${classinvalidData}`} 
        />
        <Input
          name="password"
          type="password"
          labelName="Password"
          onChange={(e) => setDataUser({ password: e.target.value })}
          className={classinvalidData} 
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
        <Button onClick={handleLogin}>Sing Up</Button>
      )}
    </>
  );
};

export default SingUp;
