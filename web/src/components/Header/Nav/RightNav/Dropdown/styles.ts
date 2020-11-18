import styled, { keyframes } from "styled-components";

const lowFade = keyframes`
  from {
    margin-top: 20px;
    opacity: 0;
  }
  to {
    margin-top: 0px;
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: none;
  position: absolute;

  z-index: 1000;

  height: 180px;
  width: 280px;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.backgroundTerceary};

  border-radius: 0 0 5px 5px;

  animation: ${lowFade} 0.3s linear;

  ul {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  ul li {
    span {
      width: 100%;

      text-decoration: none;
      color: ${(props) => props.theme.colors.textPrimary};

      cursor: pointer;

      transition: all 0.4s ease;

      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;
