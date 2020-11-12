import React, { ChangeEvent, FormEvent, useState, useContext } from "react";
import { FiX, FiPlus } from "react-icons/fi";
// import { useHistory } from "react-router-dom";

import { ThemeContext } from "styled-components";

import api from "../../../services/api";
import { useErrorMessage } from "../../../contexts/error";
import { useSuccessMessage } from "../../../contexts/success";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";
import Select from "../Select";
import TextArea from "../TextArea";

import {
  ContainerForm,
  ContainerLoader,
  InputFile,
  ContainerInputFile,
  ImagesContainer,
  ImageContainer,
} from "./styles";

const FormEletronics: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  // const history = useHistory();

  const { setMessageSuccess, setOpenSuccess } = useSuccessMessage();
  const { setOpenError, setMessageError } = useErrorMessage();

  const [loader, setLoader] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [item, setItem] = useState("");
  const [brand, setBrand] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedImages = Array.from(event.target.files);

    if (images.length !== 0) {
      setImages([...images, ...selectedImages]);
    } else setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    if (previewImages.length !== 0) {
      setPreviewImages([...previewImages, ...selectedImagesPreview]);
    } else setPreviewImages(selectedImagesPreview);
  };

  const validateData = (event: FormEvent) => {
    if (
      !name ||
      !price ||
      !item ||
      !description ||
      !brand ||
      !images
    ) {
      setOpenError(true);
      setMessageError("It seems that you stopped writing some data 🤔");
    } else handleSubmit(event);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = new FormData();

    data.append("name", name);
    data.append("price", price);
    data.append("description", description);
    data.append("item", item);
    data.append("brand", brand);
    images.forEach((image) => {
      data.append("images", image);
    });

    setLoader(true);
    try {
      await api.post("/eletronic", data);
      setLoader(false);
      setMessageSuccess("Product created with success 🙂");
      setOpenSuccess(true);
    } catch (err) {
      setLoader(false);
      setOpenError(true);
      setMessageError(err.response.data.message);
    }
  };

  const handleDeleteImage = (index: number) => {
    if (previewImages.length === 1) {
      setPreviewImages([]);
      setImages([]);
    } else {
      images.splice(index, 1);
      previewImages.splice(index, 1);

      setPreviewImages([...previewImages]);
      setImages([...images]);
    }
  };

  return (
    <>
      <ContainerForm onSubmit={validateData}>
        <Input
          labelValue="Name"
          name="name"
          type="text"
          // placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          name="price"
          type="number"
          labelValue="Price"
          onChange={(e) => setPrice(String(e.target.value))}
        />

        <TextArea
          name="Description"
          value={description}
          onChange={(e) => setDescription((e.target.value))}
        />

        <Input
          name="brand"
          type="text"
          labelValue="Brand"
          onChange={(e) => setBrand(e.target.value)}
        />

        <Select
          onChange={(e) => setItem(e.target.value)}
          title="Item"
          options={["Smartphone", "Notebook"]}
          className="form-select"
        />

        <ContainerInputFile>
          <label htmlFor="images" className="input-file">
            Images:
          </label>
          <ImagesContainer>
            {previewImages.map((image, index) => (
              <ImageContainer key={index}>
                <FiX
                  size={24}
                  color="red"
                  onClick={() => handleDeleteImage(index)}
                ></FiX>
                <img src={image} alt="Product" />
              </ImageContainer>
            ))}
            <label htmlFor="image[]" className="new-image">
              <FiPlus size={24} color={colors.primary} />
            </label>
          </ImagesContainer>

          <InputFile type="file" multiple onChange={handleImage} id="image[]" />
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

export default FormEletronics;
