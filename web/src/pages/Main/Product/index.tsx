import React from 'react';

import { Container, Header, Image, Footer } from './styles';

interface Props {
  img: string;
  title: string;
  description: string;
  price: number;
}

const Product: React.FC<Props> = ({ img, title, description, price }) => {
  return (
    <Container>

      <Header>
        <span>
          <h4>{title}</h4>
          <p>{description}</p>
        </span>

        {/* <ButtonAddToCart to="">
          <AiOutlineShoppingCart color="#fff"/>
        </ButtonAddToCart> */}
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
