import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-family: 'Lobster', cursive;
    color: ${props => props.theme.colors.primary};
    width: 150px;

    display: flex;
    span {
      margin-right: 5px;
    }
  }
`;
