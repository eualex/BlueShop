import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
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
`;

export { GlobalStyle };
