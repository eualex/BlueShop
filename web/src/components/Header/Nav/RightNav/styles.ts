import styled from "styled-components";

interface Props {
  open: boolean;
}

export const ContainerNav = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 15;

  width: 100%;
  height: ${({ open }) => open ? '110vh' : '100%'};

  ul {
    width: 45%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    list-style: none;

    > li a {
      text-decoration: none;
      font-weight: bold;
      font-size: 1.2rem;

      color: ${(props) => props.theme.colors.textSecondary};

      &:hover {
        color: ${(props) => props.theme.colors.primary};
        transition: 0.3s ease-in;
      }
    }
  }

  /* Login */
  span {
    width: 200px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    .login {
      text-decoration: none;
      font-weight: bold;
      color: ${(props) => props.theme.colors.primary};

      &:hover {
        color: ${(props) => props.theme.colors.textPrimary};
        transition: 0.3s ease-in;
      }
    }

    .button-add-product {
      background: ${(props) => props.theme.colors.primary};

      width: 30px;
      height: 30px;
      border-radius: 30px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 968px) {
    overflow: hidden;

    background-color: ${(props) =>
      props.theme.title === "dark"
        ? props.theme.colors.backgroundTerceary
        : props.theme.colors.primary};

    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;

    transition: transform 0.3s ease-in-out;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    ul {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;

      width: 100%;

      height: 10%;

      li {
        height: 60%;
        margin-bottom: 35px;
      }

      li a {
        font-size: 3rem;
        color: ${(props) =>
          props.theme.title === "dark"
            ? props.theme.colors.primary
            : props.theme.colors.textTerceary};

        &:hover {
          color: ${(props) => props.theme.colors.textPrimary};
          transition: none;
        }
      }
    }

    span {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 10%;

      a {
        font-size: 3rem;
        color: ${(props) =>
          props.theme.title === "dark"
            ? props.theme.colors.primary
            : props.theme.colors.textTerceary};

        margin-bottom: 13px;

        &:hover {
          transition: none;
          color: ${(props) => props.theme.colors.textPrimary};
        }
      }
    }
  }
`;

