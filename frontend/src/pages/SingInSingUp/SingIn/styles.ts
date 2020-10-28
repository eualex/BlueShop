import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    width: 100%;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 40%;
  width: 100%;

  margin: 20px 0px;
`;
