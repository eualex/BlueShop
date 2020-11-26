import React, { FormEvent, useCallback, useEffect, useState } from "react";

import api from "../../../services/api";
import { useErrorMessage } from "../../../contexts/error";
import { useSuccessMessage } from "../../../contexts/success";
import { useSearchProduct } from "../../../contexts/product";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";
import Select from "../../../components/Select";
import TextArea from "../../../components/TextArea";

import * as Styles from "./styles";

const FormEletronic: React.FC = React.memo(() => {
  const { setMessageSuccess, setOpenSuccess } = useSuccessMessage();
  const { setOpenError, setMessageError } = useErrorMessage();
  const { searchProduct } = useSearchProduct();

  const [loader, setLoader] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [item, setItem] = useState("");
  const [brand, setBrand] = useState("");
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const validateData = (event: FormEvent) => {
    if (!name ||
      !price ||
      !item ||
      !description ||
      !brand ) {
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
      item,
      description,
      brand,
    };

    setLoader(true);
    try {
      await api.put(`/eletronic/${searchProduct.id}`, data);
      setLoader(false);
      setMessageSuccess("Product updated with success 🙂");
      setOpenSuccess(true);
      // setCategory({ name: "", item: "" });
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
      setItem(response.data.Eitem);
      setBrand(response.data.brand);
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
          // placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          name="price"
          type="number"
          labelValue="Price"
          value={Number(price)}
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
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <Select
          onChange={(e) => setItem(e.target.value)}
          title={item}
          options={["Smartphone", "Notebook"]}
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

export default React.memo(FormEletronic);
