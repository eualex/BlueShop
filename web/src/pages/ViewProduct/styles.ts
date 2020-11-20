import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
`;

export const Wrapper = styled.div`
  height: 60vh;
  width: 90%;
  max-width: 980px;
  margin: 0 auto;

  margin-top: 70px;
  /* padding: 20px; */

  display: flex;
  justify-content: space-between;
`;

export const Top = styled.div`
  width: 70%;
  height: 100%;
  padding: 20px;

  background: ${({ theme }) => theme.colors.backgroundTerceary};

  display: flex;
`;

export const ContainerImages = styled.div`
  width: 60%;
  height: 80%;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  .images {
    width: 300px;
    display: flex;
    justify-content: center;

    /* height: 240px */
  }
`;

export const ContainerFeedback = styled.div``;

export const Image = styled.img`
  width: 300px;
  /* height: 200px;  */
`;

export const SmallImage = styled.img`
  width: 20px;
  height: 20px;

  margin-right: 10px;

  cursor: pointer;

  border-radius: 20px;

  border: 1px solid ${({ theme }) => theme.colors.textPrimary};

`;

export const ContainerInfo = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: right;

  h1, p, h3{
    /* width: 30px; */
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    font-size: 1.3rem;
  }
 
`;

export const ContainerAside = styled.div`
  width: 25%;
  padding: 20px;

  background: ${({ theme }) => theme.colors.backgroundTerceary};

  .price {
    margin-bottom: 20px;
    span {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-size: 2.7rem;
      font-weight: 700;
    }
  }

  hr {
    opacity: 0.3;
  }

  button {
    width: 100%;
  }

`;

export const Freight = styled.div`
  margin: 20px 0;

  p {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1.4rem;
  }


  .search-code {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 10px;
    
    input {
      padding: 10px;
      width: 70%;

      background: ${({ theme }) => theme.colors.backgroundPrimary};
      border: 1px solid ${({ theme }) => theme.colors.textQuintenary};
      border-radius: 5px;

      color: ${({ theme }) => theme.colors.textPrimary};

      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      &::placeholder{
        font-size: 1.6rem;
      }
    }
    
    span {
      width: 20%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 6px;

      background-color: ${({ theme }) => theme.colors.primary};
      
      cursor: pointer;
      border-radius: 10px;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
        transition: all 0.3s ease;
      }
    }
  }
`;

export const AddToCart = styled.div`
  width: 100%;
`;

export const Buy = styled.div``;

export const Bottom = styled.div``;

export const AddComent = styled.div``;

export const Coments = styled.div``;

