import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  /* width: 980px;
  margin: auto; */
`;

export const ContainerHeader = styled.div`
  width: 100vw;
  height: 100vh;

  div {
    display: flex;
    justify-content: space-between;
    
    height: 100%;
    width: 90%;
    margin: auto;
    max-width: 980px;

    div {
      color: ${colors.text};

      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 5.6rem;  
      }

      h2 {
        margin-top: 3px;
      }

      span {
        button {
          margin-right: 4px;
        }
      }
 
      @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        
        height: 30%;

        h1 { 
          text-align: center;
          font-size: 4.3rem;
        }
      }
    }

    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      
      width: 100%;
      margin: 0;

      justify-content: space-evenly;
      align-items: center;
      
      height: 95vh;

      h1 {
        width: 400px;
      }

      img {
        width: 100%;
        max-width: 300px;
        order: -1;
      }
    }
  }

  @media (max-width: 700px) {
    
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;

  
`;

export const ContainerMain = styled.div`
  font-family: 'Poppins';

  text-align: center;

  hr {
    margin-bottom: 32px;
    opacity: 0.5;
  }

  h1 {
    margin-top: 15px;
  }

  @media (max-width: 700px) {

  }
`;

export const ContainerNike = styled.div`
  hr {
    margin-top: 50px;
  }
`;