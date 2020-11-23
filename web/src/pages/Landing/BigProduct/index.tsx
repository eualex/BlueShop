import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Button from "../../../components/Button";

import { Container } from "./styles";

interface BigProductProps {
  image: string;
  title: string;
  price: number;
  description: string;
  reverse?: string;
}

const BigProduct: React.FC<BigProductProps> = ({
  image,
  title,
  price,
  description,
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
        <p>{description}</p>
        <span>
          <h3>${price}</h3>
          <Button link="category">Buy</Button>
        </span>
      </div>
    </Container>
  );
};

export default BigProduct;
