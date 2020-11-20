import React from 'react';

import * as Styles from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  img: string;
  title: string;
  description: string;
  price: number;
}

const Product: React.FC<Props> = ({ img, title, description, price, onClick }) => {
  return (
    <Styles.Container onClick={onClick}>
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

export default React.memo(Product);
