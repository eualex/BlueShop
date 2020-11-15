import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  /* height: 70%; */

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border: 1px solid rgba(89, 95, 110, 0.1);

  transition: all 1s ease;

  /* margin: 40px 0; */

  &:hover {
    background-color: ${({ theme }) =>
      theme.title === "dark"
        ? theme.colors.backgroundTerceary
        : theme.colors.backgroundQuartenary};
    cursor: pointer;
    a {
      display: flex;
      justify-content: center;
      align-items: center;

      z-index: 10;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  /* height: 100%; */

  h4 {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    color: ${({ theme }) => theme.colors.textQuintenary};
    font-size: 1.2rem;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 180px;
  height: 180px;

  padding: 40px 0px;

  transition: all 0.5s ease;

  z-index: 5;

  &:hover {
    transform: scale(1.6);
  }

  @media (max-width: 980px) {
    &:hover {
      transform: none;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;

  h6 {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    color: ${({ theme }) => theme.colors.textQuintenary};
    font-size: 1.2rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
    text-align: center;
  }
`;

export const ButtonAddToCart = styled(Link)`
  width: 40px;
  height: 40px;

  border-radius: 15px;

  background-color: ${({ theme }) => theme.colors.primary};

  display: none;

  transition: all 0.3s ease;

  &:hover {
    background-color: #5486f2;
  }
`;
