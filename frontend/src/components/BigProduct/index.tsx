import React from "react";

import { Button } from "../../styles/components";

import { Container } from "./styles";

interface BigProductProps {
  image: string;
  title: string;
  price: number;
  reverse: string | any;
}

const BigProduct: React.FC<BigProductProps> = ({ image, title, price, reverse}) => {
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
        <span>${price}</span>
        <Button>Buy</Button>
      </div>
    </Container>
  );
};

export default BigProduct;
