import { createGlobalStyle } from "styled-components";

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
  }
`;

export { GlobalStyle };
