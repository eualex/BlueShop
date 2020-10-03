import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  bottom: 0;
  background-color: ${props => props.theme.colors.backgroundSecondary};

  display: flex;
  justify-content: space-between;

  padding: 25px;
  h3 {
    color: ${props => props.theme.colors.textPrimary};
    font-family: "Poppins";
    font-size: 1.2rem;
    font-weight: bold;
  }

  span {
    color: ${props => props.theme.colors.textQuartenary};
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
