import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 980px;

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
    text-align: center;

    margin: 40px 0;
  }
`;

export const ContainerBottom = styled.div`
  width: 80%;
`;

export const Image = styled.img`
  width: 300px;
  @media (max-width: 400px) {
    width: 200px;
  }
`;
