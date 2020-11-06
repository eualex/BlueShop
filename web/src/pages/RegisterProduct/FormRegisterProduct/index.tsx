import React, { ChangeEvent, FormEvent, useState } from "react";
// import { useHistory } from "react-router-dom";

// import { ThemeContext } from "styled-components";

import api from "../../../services/api";
import { useOpen } from "../../../contexts/open";
import { useMessage } from "../../../contexts/messageError";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";
import Select from "./Select";

import {
  ContainerForm,
  ContainerLoader,
  InputFile,
  ContainerInputFile,
} from "./styles";

const FormRegisterProduct: React.FC = () => {
  // const { colors } = useContext(ThemeContext);
  // const history = useHistory();

  const { setOpenMessage } = useOpen();
  const { setMessageError } = useMessage();

  const [loader, setLoader] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [design, setDesign] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  };

  const validateData = (event: FormEvent) => {
    if(!name || !price || !genre || !category || !brand || !design || !images) {
      setOpenMessage(true);
      setMessageError("It seems that you stopped writing some data 🤔");
    } else handleSubmit(event) 
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = new FormData();

    data.append("name", name);
    data.append("price", price);
    data.append("genre", genre);
    data.append("category", category);
    data.append("brand", brand);
    data.append("design", design);
    images.forEach((image) => {
      data.append("images", image);
    });

    setLoader(true);
    try {
      await api.post("/product", data);
      setLoader(false);

      alert("deu certo");
    } catch (err) {
      setOpenMessage(true);
      setMessageError(err.response.data.message);
    }
  };

  return (
    <>
      <ContainerForm onSubmit={validateData}>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="price"
          type="text"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          name="brand"
          type="text"
          placeholder="Brand"
          onChange={(e) => setBrand(e.target.value)}
        />
        <Input
          name="designer"
          type="text"
          placeholder="Designer(optional)"
          onChange={(e) => setDesign(e.target.value)}
        />

        <Select
          onChange={(e) => setGenre(e.target.value)}
          titleValue="Genre"
          options={["Women", "Man"]}
        />

        <Select
          onChange={(e) => setCategory(e.target.value)}
          titleValue="Category"
          options={["Eletronics", "Sneakers"]}
        />

        <ContainerInputFile>
          <label htmlFor="arquivo">Product Image</label>
          <InputFile
            type="file"
            multiple
            name="arquivo"
            onChange={handleImage}
          />
        </ContainerInputFile>

        {loader ? (
          <ContainerLoader>
            <Loader width={40} height={40} />
          </ContainerLoader>
        ) : (
          <Button type="submit">Register</Button>
        )}
      </ContainerForm>
    </>
  );
};

export default FormRegisterProduct;
