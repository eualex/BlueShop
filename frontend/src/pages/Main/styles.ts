import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  hr {
    opacity: 0.2;
  }
`;

export const ContainerInput = styled.div`

  height: 20%;
  width: 100%;
  max-width: 980px;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  background: transparent;
  
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 220px !important;

  width: 50%;
  height: 70%;

  border: none;
  
  &::placeholder {

    font-size: 5rem;
    text-align: center;
    font-weight: bold;

    opacity: 0.4;
  }
`;

export const Wrapper = styled.div`
  height: 100%;

  width: 100%;
  max-width: 980px;
  margin: auto;

  display: flex;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  
`;

export const ContainerProducts = styled.div`
  width: 80%;
  
  margin-left: 30px;
  /* background: red;  */
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  /* grid */
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 0px;

  @media(max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;