import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  width: 980px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 361px;
    height: 646px;

    margin-right: 20px;
    margin-bottom: 135px;
  }
  

  span {
    margin-bottom: 200px;

    p {
      font-size: 32px;
      color: ${colors.text};

      width: 470px;
    
    }

    button {
      display: inline-block;
      font-size: 16px;
      font-weight: 600;
      color: ${colors.blue};
      border: 1px solid ${colors.blue};
      background-color: #fff;
      margin: 30px 0px 0px;
      padding: 12px 30px;
      text-decoration: none;
      border-radius: 5px;
      transition: all 150ms linear 0s;
      
      &:hover {
        background-color: ${colors.blue};
        color: #fff;

        transition: 0.5s ease-in;
      }
    }
  }

`;
