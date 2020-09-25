import React from "react";

import {
  ContainerPrimary,
  ContainerSecondary,
  Container,
  ContainerInfo,
  ContainerHelp,
  ContainerAbout,
  ContainerSocialMedia,
  ContainerBuyForm,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <ContainerPrimary>
        <ContainerInfo></ContainerInfo>

        <ContainerHelp></ContainerHelp>

        <ContainerAbout></ContainerAbout>
      </ContainerPrimary>

      <ContainerSecondary>
        <ContainerSocialMedia></ContainerSocialMedia>

        <ContainerBuyForm></ContainerBuyForm>
      </ContainerSecondary>
    </Container>
  );
};

export default Footer;
