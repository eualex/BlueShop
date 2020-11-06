import styled from "styled-components";

interface Props {
  focus?: boolean;
}

export const CustomInput = styled.input`
  width: 100%;
  /* height: 100%; */

  padding: 13px;
  border: 2px solid ${({ theme }) => theme.colors.textLogin};
  border-radius: 10px;

  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.background};

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

export const Label = styled.label<Props>`
  margin: 0 0 10px 3px;

  transition: all 0.2s ease-in-out;

  font-size: 2rem;
  color: ${props => props.focus ? ({ theme }) => theme.colors.primary : ({ theme }) => theme.colors.textPrimary };
`;
