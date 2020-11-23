import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
  /* height: 100 */
  width: 90%;
  max-width: 980px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Top = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 968px) {
    height: 100%;
    background: transparent;
    flex-direction: column;
  }
`;

export const ContainerPrimaryInfo = styled.div`
  background: ${({ theme }) => theme.colors.backgroundTerceary};
  width: 70%;
  height: 60%;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 968px) {
    margin-top: 50px;
  }

  @media(max-width: 838px) {
    width: 100%;
    background: transparent;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerImages = styled.div`
  width: 40%;
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

  @media(max-width: 838px) {
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    .images {
      margin: 15px 0;
    }
  }
`;

export const ContainerFeedback = styled.div``;

export const Image = styled.img`
  width: 300px;
  /* height: 200px;  */

  /* @media(max-width: 838px) {
    width: 250px;
  } */
  @media(max-width: 400px) {
    width: 200px;
  }
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

  h1,
  p,
  h3 {
    /* width: 30px; */
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    font-size: 1.3rem;
  }

  @media(max-width: 838px) {
    width: 100%;
  }
`;

export const ContainerAside = styled.div`
  background: ${({ theme }) => theme.colors.backgroundTerceary};

  width: 25%;
  height: 60%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .price {
    width: 100%;
    margin-bottom: 20px;
    span {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-size: 2.7rem;
      font-weight: 700;
    }
  }

  hr {
    width: 100%;
    opacity: 0.3;
  }

  @media(max-width: 968px) {
    margin-top: 20px;
    width: 90%;
    height: 100%;

    border-radius: 20px;

    margin-bottom: 70px;
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

      &::placeholder {
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

  button {
    width: 100%;
  }
`;

export const Buy = styled.div`
  width: 100%;

  button {
    width: 100%;
  }
`;

export const Recommendations = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 20px;
  }

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      width: 100%;
      text-align: center;
    }
  }
`;

export const ContainerProducts = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 0px;
`;

