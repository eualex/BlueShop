import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Button from "../Button";

import { Container } from "./styles";

interface BigProductProps {
  image: string;
  title: string;
  price: number;
  reverse?: string;
}

const BigProduct: React.FC<BigProductProps> = ({
  image,
  title,
  price,
  reverse = "row",
}) => {
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);

  return (
    <Container reverse={reverse}>
      <img
        src={image}
        alt="produto"
        data-aos={reverse === "row-reverse" ? "fade-left" : "fade-right"}
      />
      <div data-aos={reverse === "row-reverse" ? "fade-right" : "fade-left"}>
        <h1>{title}</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <span>
          <h3>${price}</h3>
          <Button>Buy</Button>
        </span>
      </div>
    </Container>
  );
};

export default BigProduct;
