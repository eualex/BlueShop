import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  /* width: 980px;
  margin: auto; */
`;

export const ContainerHeader = styled.div`
  width: 100vw;
  height: 100vh;

  max-width: 980px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  
  div {
    color: ${colors.text};

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 56px;  
    }

    h2 {
      margin-top: 3px;
    }

    span {
      button {
        margin-right: 4px;
      }
    }
  }
`;

export const Image = styled.img`
  width: 400px;
`;

export const ContainerMain = styled.div`
  font-family: 'Poppins';

  text-align: center;

  hr {
    opacity: 0.5;
  }

  h1 {
    margin-top: 15px;
  }
`;

export const ContainerNike = styled.div`
  hr {
    margin-top: 50px;
  }
`;