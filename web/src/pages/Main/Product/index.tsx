import React from 'react';

import * as Styles from './styles';

interface Props {
  img: string;
  title: string;
  description: string;
  price: number;
}

const Product: React.FC<Props> = ({ img, title, description, price }) => {
  return (
    <Styles.Container>
      <Styles.Header>
        <span>
          <h4>{title}</h4>
          <p>{description}</p>
        </span>

        {/* <ButtonAddToCart to="">
          <AiOutlineShoppingCart color="#fff"/>
        </ButtonAddToCart> */}
      </Styles.Header>

      <Styles.ContainerImage>
        <Styles.Image src={img} alt='product'/>
      </Styles.ContainerImage>

      <Styles.Footer>
        <span>
          <h6>Design</h6>
          <p>Unknown</p>
        </span>

        <strong>${price}</strong>

      </Styles.Footer>
    </Styles.Container>
  );
};

export default Product;
