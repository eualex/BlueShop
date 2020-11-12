import styled from 'styled-components';

export const ContainerSelect = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.textLogin};
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    order: 1;
  }
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";

  padding: 15px;

  width: 90%;
  height: 100%;

  border: none;
  border-radius: 5px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2rem;

  option {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.background};
    /* padding: 10px; */
  }
`;