import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  h1 {
    font-family: 'Lobster', cursive;
    color: ${colors.blue};
    width: 150px;

    display: flex;
    span {
      margin-right: 5px;
    }
  }
`;
