import React from "react";

import * as Styles from "./styles";

import Header from "../../components/Header";
import Main from "./Main";
import Footer from "../../components/Footer";

import { useOpen } from "../../contexts/BurguerMenu";

const Landing: React.FC = () => {
  const { open } = useOpen();

  return (
    <Styles.Container>
      <Header />

      {!open && (
        <>
          <Main />
          <Footer />
        </>
      )}
    </Styles.Container>
  );
};

export default Landing;
