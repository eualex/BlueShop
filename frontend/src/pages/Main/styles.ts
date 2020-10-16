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

  width: 50%;
  height: 70%;

  border: none;

  &::placeholder {
    font-size: 5rem;
    text-align: center;
    opacity: 0.4;
    bottom: 0;
  }
`;

export const Wrapper = styled.div`
  height: 100%;

  width: 100%;
  max-width: 980px;
  margin: auto;
`;

export const ContainerProducts = styled.div``;
