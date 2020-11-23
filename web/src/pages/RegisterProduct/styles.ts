import styled from "styled-components";

interface Props {
  formName: string;
}

export const Container = styled.div`
  width: 100vw;

  margin-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 780px;

  border-radius: 10px;

  margin: 20px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.backgroundTerceary};

  -webkit-box-shadow: ${({ theme }) =>
    theme.title === "dark" ? "none" : "-1px 6px 33px -6px rgba(0, 0, 0, 0.15)"};
  -moz-box-shadow: ${({ theme }) =>
    theme.title === "dark" ? "none" : "-1px 6px 33px -6px rgba(0, 0, 0, 0.15)"};
  box-shadow: ${({ theme }) =>
    theme.title === "dark" ? "none" : "-1px 6px 33px -6px rgba(0, 0, 0, 0.15)"};

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};

    display: flex;
    flex-direction: column;

    box-shadow: none;

    width: 100vw;
    height: 100vh;
  }
`;

export const ContainerTop = styled.div`
  margin-top: 30px;

  h1 {
    color: ${({ theme }) => theme.colors.textPrimary};

    margin: 20px 0;
  }
`;

export const ContainerBottom = styled.div`
  width: 80%;
`;

export const Image = styled.img`
  width: 300px;
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const ContainerFormName = styled.div<Props>`
  color: ${({ theme }) => theme.colors.textPrimary};

  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  span:hover {
    cursor: pointer;
  }

  .sneakers-form-name {
    border-bottom: ${(props) =>
      props.formName==="sneakers" ? `2px solid ${props.theme.colors.primary}` : "none"};

    color: ${(props) =>
      props.formName==="sneakers"
        ? ({ theme }) => theme.colors.primary
        : ({ theme }) => theme.colors.textQuartenary};
    font-size: ${(props) => (props.formName==="sneakers" ? "2.6rem" : "2rem")};
    transition: all 0.5s ease;
  }

  .eletronics-form-name {
    border-bottom: ${(props) =>
      props.formName==="eletronics" ? `2px solid ${props.theme.colors.primary}` : "none"};

    color: ${(props) =>
      props.formName==="eletronics"
        ? ({ theme }) => theme.colors.primary
        : ({ theme }) => theme.colors.textQuartenary};
    font-size: ${(props) => (props.formName==="eletronics" ? "2.6rem" : "2rem")};

    transition: all 0.5s ease;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.9rem;

    span {
      font-size: 2rem;
    }
  }
`;
