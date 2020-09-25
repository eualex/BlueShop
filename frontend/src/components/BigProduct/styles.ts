import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

interface ProductContainerProps {
  reverse: string;
}

export const Container = styled.div<ProductContainerProps>`
  display: flex;
  flex-direction: ${props => props.reverse};
  
  margin-top: 100px;

  img {
    width: 400px;
    height: 380px;
    
    transition: transform .5s;

    &:hover {
      transform: scale(1.2);
    }
  }

  div {
    h1 {
      text-transform: uppercase;
      color: ${colors.text}
    }

    p {
      color: ${colors.lowText}
    }

    span {
      font-weight: bold;
      margin: 10px 18px 0 0;
    }
  }
`;
