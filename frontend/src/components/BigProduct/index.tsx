import React from "react";

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
  return (
    <Container reverse={reverse}>
      <img src={image} alt="produto" />
      <div>
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
