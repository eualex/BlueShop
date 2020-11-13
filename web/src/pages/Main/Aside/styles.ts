import styled from "styled-components";

interface Props {
  Hidden: boolean;
}

export const Container = styled.div`
  height: 73vh;
  width: 25%;

  @media (max-width: 968px) {
    width: 100%;
    padding-bottom: 30px;

    .show {
      span span svg {
        margin-bottom: 4px;

        transform: rotate(90deg);
      }
    }
  }
`;

export const ContainerFilter = styled.div`
  background: ${({ theme }) =>
    theme.title === "light"
      ? theme.colors.backgroundMain
      : theme.colors.backgroundTerceary};

  padding: 40px 40px 20px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  span span {
    h4 {
      color: ${({ theme }) => theme.colors.textPrimary};
      margin-bottom: 10px;

      opacity: 0.7;
    }

    svg {
      display: none;
    }
  }

  @media (max-width: 968px) {
    width: 80%;
    margin: 0 auto;
    padding: 0;

    span span {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 70%;
      margin: 0 auto;

      padding: 15px 0;

      h4 {
        margin: 0;
      }

      svg {
        display: block;
        transition: all 0.4s ease;

        opacity: 0.7;
      }
    }
  }
`;

export const Wrapper = styled.div<Props>`
  width: 100%;

  div {
    div {
      margin: 10px 0px;
    }
  }

  @media (max-width: 968px) {
    max-height: ${(props) => (props.Hidden ? "0px" : "500px")};

    width: 80%;
    margin: 0 auto;

    transition: max-height 1.4s ease;

    div {
      padding: 5px;
      visibility: ${(props) => (props.Hidden ? "hidden" : "visible")};

      overflow: hidden;

      transition: visibility 0.3s linear;

      div:nth-child(1) {
        transform: ${(props) =>
          props.Hidden ? "translateX(-100%)" : "translateX(0)"};
        transition: transform 0.7s linear;

        z-index: 1;
      }

      div:nth-child(2) {
        transform: ${(props) =>
          props.Hidden ? "translateX(-100%)" : "translateX(0)"};
        transition: transform 0.7s linear;
      }

      div:nth-child(3) {
        transform: ${(props) =>
          props.Hidden ? "translateX(-100%)" : "translateX(0)"};
        transition: transform 0.7s linear;
      }

      div:nth-child(4) {
        transform: ${(props) =>
          props.Hidden ? "translateX(-100%)" : "translateX(0)"};
        transition: transform 0.7s linear;
      }

      div:nth-child(5) {
        transform: ${(props) =>
          props.Hidden ? "translateX(-100%)" : "translateX(0)"};
        transition: transform 0.7s linear;
      }
    }
  }
`;

export const ContainerCreateProduct = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;

  display: flex;
  justify-content: center;

  button {
    width:100%;
  }

  @media(max-width: 968px) {
    width: 80%;
    margin: 0 auto;
    padding: 0;
  }
`;
