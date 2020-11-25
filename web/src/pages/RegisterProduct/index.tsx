import React, { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import * as Styles from "./styles";

import RegisterImg from "../../img/register_product.svg";

import FormSneakers from "./FormSneakers";
import FormEletronics from "./FormEletronics";

const RegisterProduct: React.FC = () => {
  const [formName, setFormName] = useState("sneakers");

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
              src={RegisterImg}
              alt="Register Product"
            />
            <h1 data-aos="fade-left">Register a Product</h1>

            <Styles.ContainerFormName formName={formName}>
              <span
                className="sneakers-form-name"
                onClick={() => setFormName("sneakers")}
              >
                Sneakers
              </span>
              <span>or</span>
              <span
                className="eletronics-form-name"
                onClick={() => setFormName("eletronics")}
              >
                Eletronics
              </span>
            </Styles.ContainerFormName>
          </Styles.ContainerTop>

          <Styles.ContainerBottom>
            {formName === "sneakers" && <FormSneakers />}
            {formName === "eletronics" && <FormEletronics />}
          </Styles.ContainerBottom>
        </Styles.Wrapper>
      </Styles.Container>
    </>
  );
};

export default RegisterProduct;
