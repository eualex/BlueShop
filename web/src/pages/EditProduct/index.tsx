import React, { useEffect } from "react";

import { useSearchProduct } from '../../contexts/product';

import Aos from "aos";
import "aos/dist/aos.css";

import * as Styles from "./styles";

import EditProductImg from "../../img/update_product.svg";

import FormEletronics from "./FormEditEletronics";
import FormSneakers from "./FormEditSneakers";

const EditProduct: React.FC = () => {
  const { searchProduct } = useSearchProduct();

  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);

  return (
    <>
      <Styles.Container>
        <Styles.Wrapper>
          <Styles.ContainerTop>
            <Styles.Image
              data-aos="fade-right"
              src={EditProductImg}
              alt="Register Product"
            />
            <h1 data-aos="fade-left">Edit a Product</h1>

          </Styles.ContainerTop>

          <Styles.ContainerBottom>
            {searchProduct.category === "sneakers" && <FormSneakers />}
            {searchProduct.category === "eletronics" && <FormEletronics />}
          </Styles.ContainerBottom>
        </Styles.Wrapper>
      </Styles.Container>
    </>
  );
};

export default EditProduct;
