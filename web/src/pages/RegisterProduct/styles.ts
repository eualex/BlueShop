import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.backgroundTerceary};
  -webkit-box-shadow: -1px 6px 33px -6px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -1px 6px 33px -6px rgba(0, 0, 0, 0.15);
  box-shadow: -1px 6px 33px -6px rgba(0, 0, 0, 0.15);

  height: 100%;

  width: 100%;
  max-width: 980px;

  padding: auto;

  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    max-height: 580px;
  }

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.background};

    display: flex;
    flex-direction: column;
    
    box-shadow: none;

    width: 100vw;
    height: 100vh;
  }
`;

export const ContainerLeft = styled.div`
  width: 50%;
  height: 100%;

  border-radius: 15px 0px 0px 15px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 60%;
    h1 {
      margin-top: 40px;
    }
  }
`;

export const ContainerRight = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  padding: 0px 80px 0px 40px;

  @media (max-width: 768px) {
    padding: 0px 30px;

    width: 100%;
    height: 100%;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 40%;

  margin: 20px 0px;
`;

export const Image = styled.img`
  width: 300px;
  @media(max-width: 768px) {
    width: 200px;
  }
`;