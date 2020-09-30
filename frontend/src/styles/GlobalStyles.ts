import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;

    /* background: ${colors.background}; */
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    html {
      font-size: 50%;
    }
  }
`;
