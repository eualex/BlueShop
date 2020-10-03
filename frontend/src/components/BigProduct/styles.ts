import styled from 'styled-components';

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
      color: ${props => props.theme.colors.textPrimary};
    }

    p {
      color: ${props => props.theme.colors.textSecondary};
    }

    span h3{
      font-weight: bold;
      margin-top: 10px;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 310px;
      height: 290px;
    }
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 310px;
      height: 290px;
    }
    
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    div p {
      width: 85%;
    }
  }
`;
