import React from "react";

import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'

import {
  ContainerPrimary,
  ContainerSecondary,
  Container,
  ContainerInfo,
  ContainerHelp,
  ContainerAbout,
  ContainerSocialMedia,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      {/* <div> */}
        <ContainerPrimary>
          <ContainerInfo>
            <h3>FIND A BLUE STORE</h3>
            <h3>SIGN UP TO RECEIVE NEWS</h3>
            <h3>SITE MAP</h3>
          </ContainerInfo>

          <ContainerHelp>
            <h3>HELP</h3>

            <span>General Questions</span>
            <span>Find your Size</span>
            <span>Delivery</span>
            <span>Requests</span>
            <span>Exchanges and Returns</span>
            <span>Payments</span>
            <span>Products</span>
            <span>Corporate</span>
            <span>Contact us</span>
          </ContainerHelp>

          <ContainerAbout>
            <h3>ABOUT BLUE</h3>

            <span>Copaíba LTDA</span>
            <span>Magrão LTDA</span>

          </ContainerAbout>
        </ContainerPrimary>

        <ContainerSecondary>
          <ContainerSocialMedia>
            <h3>SOCIAL MEDIA</h3>
            
            <IoLogoInstagram size="32px" color="#7e7e7e"/>
            <IoLogoTwitter size="32px" color="#7e7e7e"/>
            <IoLogoFacebook size="32px" color="#7e7e7e"/>
          </ContainerSocialMedia>
        </ContainerSecondary>
      {/* </div> */}
    </Container>
  );
};

export default Footer;
