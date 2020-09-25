import styled from 'styled-components';
import colors from './colors';

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