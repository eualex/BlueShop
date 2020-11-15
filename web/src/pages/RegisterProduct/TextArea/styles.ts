import styled from 'styled-components';

export const ContainerTextArea = styled.div`
  label {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 2rem;
  }

  textarea {
    width: 100%;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    border: 1px solid ${({ theme }) => theme.colors.textQuintenary};
    border-radius: 20px;
    outline: none;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1.8rem;

    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;

    margin-top: 10px;
  }
`;