import React from "react";

import * as Styles from "./styles";

import Main from "./Main";
import Footer from "../../components/Footer";

import { useOpen } from "../../contexts/burguerMenu";

const Landing: React.FC = () => {
  const { open } = useOpen();

  return (
    <Styles.Container>
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
