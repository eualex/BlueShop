import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";

export const Container = styled.div`
  width: 100vw;
  height: 70vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  max-width: 980px;
  margin: 0 auto;

  padding-top: 40px;

  span {
    h1 {
      text-align: center;
      color: ${({ theme }) => theme.colors.textPrimary};
      /* opacity: 0.4;  */
    }
  }
`;

export const ContainerDropdown = styled.div`
  padding-top: 50px;

  display: flex;
  justify-content: space-around;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;

    height: 50%;
  }
`;

export const Dropdown = styled.div`
  position: relative;

  width: 300px;

  -webkit-box-shadow: ${({ theme }) =>
    theme.title === "dark" ? "none" : "2px 10px 47px -2px rgba(0, 0, 0, 0.33)"};
  -moz-box-shadow: ${({ theme }) =>
    theme.title === "dark" ? "none" : "2px 10px 47px -2px rgba(0, 0, 0, 0.33)"};
  box-shadow: ${({ theme }) =>
    theme.title === "dark" ? "none" : "2px 10px 47px -2px rgba(0, 0, 0, 0.33)"};

  transition: all 0.4s ease;

  span {
    background-color: ${({ theme }) => theme.colors.backgroundTerceary};

    height: 40px;
    width: 300px;

    /* border: 1px solid ${({ theme }) => theme.colors.textPrimary}; */

    display: flex;
    justify-content: space-around;
    align-items: center;

    p {
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    svg {
      transition: all 0.4s ease;
    }
  }

  ul {
    background-color: ${({ theme }) => theme.colors.backgroundTerceary};

    position: absolute;

    list-style: none;

    display: none;

    padding: 20px 40px;

    transition: width 1s ease;
    li {
      span {
        width: 100%;
        /* text-decoration: none; */
        color: ${({ theme }) => theme.colors.textPrimary};

        transition: all 0.4s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  &:hover {
    transform: scale(1.1);

    span {
      svg {
        transform: rotate(90deg);
      }
    }

    ul {
      width: 100%;

      display: flex;
      flex-direction: column;

      background-color: ${({ theme }) => theme.colors.backgroundTerceary};

      -webkit-box-shadow: ${({ theme }) =>
        theme.title === "dark"
          ? "none"
          : "-2px 10px 40px -9px rgba(0, 0, 0, 0.45)"};
      -moz-box-shadow: ${({ theme }) =>
        theme.title === "dark"
          ? "none"
          : "-2px 10px 40px -9px rgba(0, 0, 0, 0.45)"};
      box-shadow: ${({ theme }) =>
        theme.title === "dark"
          ? "none"
          : "-2px 10px 40px -9px rgba(0, 0, 0, 0.45)"};

      @media(max-width: 768px) {
        li {
          padding: 5px;
        }
      }
    }
  }
`;

export const Icon = styled(RiArrowRightSLine)``;
