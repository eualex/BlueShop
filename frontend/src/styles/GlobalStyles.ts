import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    overflow-X: hidden;
    width: 100vw;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;

    background: ${props => props.theme.colors.background};
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  @media (max-width: 425px) {
    body {
      width: 100vw;

      overflow-X: hidden;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 50%;
    }

    body {
      overflow-X: hidden;

      width: 100vw;
      height: 100vh;
    }
  }
`;
