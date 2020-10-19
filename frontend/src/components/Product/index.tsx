import React from 'react';

import { Container, Header, Image, Footer, ButtonAddToCart } from './styles';

import { FiPlus } from "react-icons/fi";

interface Props {
  img: string;
  title: string;
  description: string;
  price: number;
}

const Product: React.FC<Props> = ({ img, title, description, price }) => {
  return (
    <Container>
      <ButtonAddToCart to="">
        <FiPlus />
      </ButtonAddToCart>

      <Header>
        <h4>{title}</h4>
        <p>{description}</p>
      </Header>

      <Image src={img} alt='product'/>

      <Footer>
        <span>
          <h6>Design</h6>
          <p>Unknown</p>
        </span>

        <strong>${price}</strong>

      </Footer>
    </Container>
  );
};

export default Product;
