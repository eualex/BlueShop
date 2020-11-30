import styled from 'styled-components';

export const Container = styled.div`
  .not-found {
    width: 100%;
    height: 90vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      height: 100px;
      color: ${({ theme }) => theme.colors.textPrimary};
      font-weight: none;
    }
  }
`;
