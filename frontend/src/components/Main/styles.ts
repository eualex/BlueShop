import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  width: 980px;
  margin: auto;
`;

export const ContainerHeader = styled.div`
  width: 100%;
  max-width: 980px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  
  margin-top: 100px;
  div {
    color: #111;

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
      /* width: 150px; */
      /* display: flex;
      justify-content: space-between; */

      button {
        margin-right: 4px;
      }
    }
  }
`;

export const Button = styled.button`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border: 1px solid;
  background-color: ${colors.blue};
  margin: 30px 0px 0px;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 5px;
  transition: all 150ms linear 0s;
  
  &:hover {
    background-color: transparent;
    color: ${colors.text};

    transition: 0.3s ease-in;
  }
`;

export const Image = styled.img`
  width: 400px;
`;

export const ContainerItens = styled.div`
`;
