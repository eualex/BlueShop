import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  bottom: 0;
  background-color: #eee;

  display: flex;
  justify-content: space-between;

  padding: 25px;
  h3 {
    color: ${colors.text};
    font-family: "Poppins";
    font-size: 1.2rem;
    font-weight: bold;
  }

  span {
    color: #7e7e7e;
    margin: 3px 0px;
    font-size: 1.2rem;
  }
`;

export const ContainerPrimary = styled.div`
  display: flex;
  justify-content: space-between;

  width: 50%;

  @media (max-width: 576px) {
    width: 72%;
  }
`;

export const ContainerSecondary = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerInfo = styled.div`
  h3 {
    margin-top: 6px;
  }
`;

export const ContainerHelp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerSocialMedia = styled.div`
  h3 {
    font-size: 1.4rem;
  }

  @media (max-width: 576px) {
    h3 {
      margin-left: 7px;
    }
  }
`;

// export const ContainerBuyForm = styled.div``;
