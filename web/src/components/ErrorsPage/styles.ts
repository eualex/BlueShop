import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 5rem;

    opacity: 0.3;
  }

  h2 {
    color: ${({ theme }) => theme.colors.textPrimary};

    opacity: 0.3;
  }
`;
