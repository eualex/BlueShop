import React, { FormEvent, useCallback, useEffect, useState } from "react";
// import { FiX, FiPlus } from "react-icons/fi";

import api from "../../../services/api";
import { useErrorMessage } from "../../../contexts/error";
import { useSuccessMessage } from "../../../contexts/success";
// import { useCategory } from "../../../contexts/category";
// import { useTheme } from "../../../contexts/theme";
import { useSearchProduct } from "../../../contexts/product";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";
import Select from "../../../components/Select";
import TextArea from "../../../components/TextArea";

import * as Styles from "./styles";

const FormSneakers: React.FC = React.memo(() => {
  // const { theme } = useTheme();

  const { setMessageSuccess, setOpenSuccess } = useSuccessMessage();
  const { setOpenError, setMessageError } = useErrorMessage();
  // const { setCategory } = useCategory();
  const { searchProduct } = useSearchProduct();

  const [loader, setLoader] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [brand, setBrand] = useState("");
  const [design, setDesign] = useState("");
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const validateData = (event: FormEvent) => {
    if (!name || !price || !genre || !description || !brand || !design) {
      setOpenError(true);
      setMessageError("It seems that you stopped writing some data 🤔");
    } else {
      handleSubmit(event);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      name,
      price,
      description,
      genre,
      brand,
      design,
    };

    setLoader(true);
    try {
      await api.put(`/sneaker/${searchProduct.id}`, data);
      setLoader(false);
      setMessageSuccess("Product updated with success 🙂");
      setOpenSuccess(true);
    } catch (err) {
      setLoader(false);
      setOpenError(true);
      setMessageError(err.response?.data?.message || "Unknown error :(");
    }
  };

  const load = useCallback(async () => {
    const category = searchProduct.category.split("");
    category.pop();

    try {
      const response = await api.get(
        `${category.join("")}/${searchProduct.id}`
      );

      setName(response.data.name);
      setPrice(response.data.price);
      setDescription(response.data.description);
      setGenre(response.data.genre);
      setBrand(response.data.brand);
      setDesign(response.data?.design);
      setPreviewImages([
        ...response.data.images.map((i: { id: string; url: string }) => i.url),
      ]);
    } catch {}
  }, [searchProduct]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      <Styles.ContainerForm onSubmit={validateData}>
        <Input
          labelValue="Name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          name="price"
          type="number"
          value={Number(price)}
          labelValue="Price"
          onChange={(e) => setPrice(String(e.target.value))}
        />

        <TextArea
          name="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Input
          name="brand"
          type="text"
          value={brand}
          labelValue="Brand"
          onChange={(e) => setBrand(e.target.value)}
        />

        <Input
          name="designer"
          type="text"
          labelValue="Designer(optional)"
          value={design}
          onChange={(e) => setDesign(e.target.value)}
        />

        <Select
          onChange={(e) => setGenre(e.target.value)}
          title={genre}
          options={["Woman", "Man", "All"]}
          className="form-select"
        />

        <Styles.ContainerImagesGroup>
          <span className="images-title">Images:</span>
          <Styles.ImagesContainer>
            {previewImages.map((image, index) => (
              <Styles.ImageContainer key={index}>
                <img src={image} alt="Product" />
              </Styles.ImageContainer>
            ))}
          </Styles.ImagesContainer>
        </Styles.ContainerImagesGroup>

        {loader ? (
          <Styles.ContainerLoader>
            <Loader width={40} height={40} />
          </Styles.ContainerLoader>
        ) : (
          <Button type="submit">Update</Button>
        )}
      </Styles.ContainerForm>
    </>
  );
});

export default React.memo(FormSneakers);
