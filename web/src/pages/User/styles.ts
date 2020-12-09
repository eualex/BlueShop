import styled, { keyframes } from "styled-components";

interface Props {
  stateSing: boolean;
}

const lowBorder = keyframes`
  from {
    margin: 0 40px;
    opacity: 0;
  } to {
    margin: 0;
    opacity: 0.8;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 90vh;

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
    max-height: 480px;
  }

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};

    display: flex;
    flex-direction: column;

    box-shadow: none;

    width: 100vw;
    height: 100%;
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
    height: 40%;
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
    margin-top: 20px;

    width: 100%;
    height: 60%;

    display: flex;
    align-items: center;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 40%;

  margin: 20px 0px;
`;

export const ContainerStateSing = styled.div<Props>`
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 60%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  span:hover {
    cursor: pointer;
  }

  span:nth-child(1) {
    overflow: hidden;

    color: ${(props) =>
      props.stateSing
        ? ({ theme }) => theme.colors.primary
        : ({ theme }) => theme.colors.textQuartenary};
    font-size: ${(props) => (props.stateSing ? "2.6rem" : "2rem")};
    transition: all 0.5s ease;

    .login-bottom {
      height: 2px;
      display: ${(props) => (props.stateSing ? "block" : "none")};
      background-color: ${(props) =>
        props.stateSing ? props.theme.colors.primary : "none"};

      animation: ${lowBorder} 0.4s linear;
    }
  }

  span:nth-child(2) {
    margin: 0 10px;
    font-size: 2rem;
  }

  span:nth-child(3) {
    overflow: hidden;

    color: ${(props) =>
      props.stateSing
        ? ({ theme }) => theme.colors.textQuartenary
        : ({ theme }) => theme.colors.primary};
    font-size: ${(props) => (props.stateSing ? "2rem" : "2.4rem")};
    transition: all 0.5s ease;

    .register-bottom {
      height: 2px;
      display: ${(props) => (props.stateSing ? "none" : "block")};
      background-color: ${(props) =>
        props.stateSing ? "none" : props.theme.colors.primary};

      animation: ${lowBorder} 0.4s linear;
    }
  }

  @media (max-width: 895px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.9rem;

    align-items: center;
    width: 50%;

    span {
      font-size: 4rem;
    }
  }

  @media (max-width: 385px) {
    width: 80%;
  }
`;

export const Image = styled.img`
  width: 300px;
`;
