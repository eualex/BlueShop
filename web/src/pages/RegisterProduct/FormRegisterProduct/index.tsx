import React, { useContext, useState } from "react";
import { RiArrowDownSLine } from 'react-icons/ri';
// import { useHistory } from "react-router-dom";

import { ThemeContext } from 'styled-components';

import api from "../../../services/api";
import { useOpen } from "../../../contexts/open";
import { useMessage } from "../../../contexts/messageError";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";

import {
  ContainerForm,
  ContainerLoader,
  ContainerSelect,
  Select,
  InputFile,
  ContainerInputFile
} from "./styles";

const FormRegisterProduct: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  // const history = useHistory();

  const { setOpenMessage } = useOpen();
  const { setMessageError } = useMessage();

  const [image, setImage] = useState<string[  ]>([]);
  const [loader, setLoader] = useState(false);

  const [name, setName] = useState("")
  const [price, setPrice] = useState<number>()
  const [genre, setGenre] = useState("")
  const [category, setCategory] = useState("")
  const [brand, setBrand] = useState("")
  const [designer, setDesigner] = useState("")
 
  //registrando usuario na base, caso não haja erro de validação
  // const handleRegister = async () => {
  //   setLoader(true);

  //   await api
  //     .post("/users", { name, email, password })
  //     .then((res) => console.log('produto cadastrado'))
  //     .catch((err) => {
  //       setLoader(false);
  //       setOpenMessage(true);
  //       setMessageError(err.response.data.message);
  //     });
  // };

  // //checando se os dados do input são vazios ou válidos
  // const checkData = () => {
  //   if (name === "" || password === "" || email === "") {
  //     setOpenMessage(true);
  //     setMessageError("It seems that you stopped writing some data 🤔");
  //   }

  //   // else if (checkEmailIsValid(email)) {
  //   //   handleRegister();
  //   // } else {
  //   //   setOpenMessage(true);
  //   //   setMessageError("Invalid Email 😥");
  //   // }
  // };

  console.log(image);

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
          name="price"
          type="text"
          labelName="Price"
          onChange={(e) => setPrice(Number(e.target.value))} 
        />
        <Input
          name="brand"
          type="text"
          labelName="Brand"
          onChange={(e) => setBrand(e.target.value)}
        />
        <Input
          name="designer"
          type="text"
          labelName="Designer(optional)"
          onChange={(e) => setDesigner(e.target.value)}
        />
        <ContainerSelect>
          <RiArrowDownSLine color={colors.textPrimary} size={20}/>
          <Select defaultValue="Genre">
            <option disabled hidden defaultValue="Genre">Genre</option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
          </Select>
        </ContainerSelect>
        <ContainerSelect>
        <RiArrowDownSLine color={colors.textPrimary} size={20}/>
          <Select defaultValue="Category">
          <option disabled hidden defaultValue="Category">Category</option>
            <option value="Women">Eletronics</option>
            <option value="Men">Sneakers</option>
          </Select>
        </ContainerSelect>

        <ContainerInputFile>
          <label>Product Image</label>
          <InputFile type="file" name="arquivo" onChange={e => setImage([...image, e.target.value])}/>
          <p>{image[0]} {image.length > 1 && "..."}</p>
          <p>{image.length > 1 && "..."}</p>
        </ContainerInputFile>
        
        {loader ? (
          <ContainerLoader>
            <Loader width={40} height={40} />
          </ContainerLoader>
        ) : (
          <Button>Register</Button>
        )}
      </ContainerForm>

    </>
  );
};

export default FormRegisterProduct;
