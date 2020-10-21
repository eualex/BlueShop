import styled from 'styled-components';

export const Container = styled.div`
  font-family: Lobster;
  font-weight: bold;
  
  a {
    text-decoration: none;
    font-size: 3.2rem;
    color: ${props => props.theme.colors.primary};
    
    width: 150px;
  }
`;
