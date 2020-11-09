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
import Select from "./Select";

import {
  ContainerForm,
  ContainerLoader,
  InputFile,
  ContainerInputFile,
  ImagesContainer,
  ImageContainer,
} from "./styles";
import TextArea from "./TextArea";

const FormRegisterProduct: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  // const history = useHistory();

  const { setMessageSuccess, setOpenSuccess } = useSuccessMessage();
  const { setOpenError, setMessageError } = useErrorMessage();

  const [loader, setLoader] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [design, setDesign] = useState("");
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
      !genre ||
      !description ||
      !category ||
      !brand ||
      !design ||
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
      setMessageSuccess("Product created with success 🙂");
      setOpenSuccess(true);
    } catch (err) {
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
          type="text"
          labelValue="Price"
          onChange={(e) => setPrice(e.target.value)}
        />

        <TextArea
          name="Description"
          value={description}
          onChange={(e) => setDescription((e.target.value).trim())}
        />

        <Input
          name="brand"
          type="text"
          labelValue="Brand"
          onChange={(e) => setBrand(e.target.value)}
        />

        <Input
          name="designer"
          type="text"
          labelValue="Designer(optional)"
          onChange={(e) => setDesign(e.target.value)}
        />

        <Select
          onChange={(e) => setGenre(e.target.value)}
          title="Genre"
          options={["Women", "Man"]}
          className="form-select"
        />

        <Select
          onChange={(e) => setCategory(e.target.value)}
          title="Category"
          options={["Eletronics", "Sneakers"]}
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

export default FormRegisterProduct;
