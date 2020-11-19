import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .not-found {
    width: 100%;
    height: 90%;

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
