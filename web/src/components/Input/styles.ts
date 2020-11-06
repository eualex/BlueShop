import styled from 'styled-components';


export const CustomInput = styled.input`
  width: 100%;
  /* height: 100%; */

  padding: 13px;
  border: 2px solid ${({ theme }) => theme.colors.textLogin};
  border-radius: 10px;

  color: ${({ theme }) => theme.colors.textLogin};
  background-color: transparent;

  font-size: 2rem;

  transition: all 0.2s ease-in-out;
 
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLogin};
    font-size: 1.8rem;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  } 
`;
