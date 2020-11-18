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
  height: ${({ open }) => (open ? "110vh" : "100%")};

  ul {
    width: 70%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    list-style: none;

    .only-mobile {
      display: none;
    }

    // dropdown
    li {
      position: relative;
      z-index: 20;

      &:hover {
        .dropdown {
          display: block;
        }
      }
    }

    li .title {
      width: 100%;
      padding: 10px 20px;

      text-decoration: none;
      font-weight: 500;
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.textPrimary};
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme.colors.backgroundTerceary};
        /* color: ${(props) => props.theme.colors.primary}; */
        transition: 0.3s ease-in;
      }
    }
  }

  /* Login */
  span {
    width: 150px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    .login {
      text-decoration: none;
      font-weight: bold;
      color: ${(props) => props.theme.colors.textPrimary};

      &:hover {
        color: ${(props) => props.theme.colors.primary};
        transition: 0.3s ease-in;
      }
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

      .only-pc {
        display: none;
      }

      .only-mobile {
        display: block;

        span {
          font-size: 3rem;
          text-decoration: none;
          font-weight: 500;
          color: ${(props) =>
            props.theme.title === "dark"
              ? props.theme.colors.primary
              : props.theme.colors.textTerceary};

          &:hover {
            color: ${(props) => props.theme.colors.textPrimary};
          }
        }
      }

      li .title {
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

      .login {
        font-size: 3rem;
        font-weight: 500;
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
