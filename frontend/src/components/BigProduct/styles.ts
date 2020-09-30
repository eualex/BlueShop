import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

interface ProductContainerProps {
  reverse: string;
}

export const Container = styled.div<ProductContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.reverse};
  
  width: 100%;
  max-width: 980px;
  margin: auto;

  height: 100vh;

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
