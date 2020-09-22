import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  background-color: ${colors.blue};
  
  /* width: 100%; */

  div {
    margin: auto;
    width: 980px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-family: 'Lobster', cursive;
      color: #fff;
      
      width: 150px;
      padding: 15px 0;

      display: flex;
      span {
        margin-right: 5px;
      }
    }

    span {
      width: 150px;

      display: flex;
      align-items: center;
      justify-content: space-around;

      a {
        text-decoration: none;
        font-weight: bold;
        color: #fff;

        &:hover {
          color: ${colors.text};
          transition: 0.5s ease-in;
        }
      }
    }
  }

`;
