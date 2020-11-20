import styled from "styled-components";

export const ContainerButton = styled.button`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textTerceary};
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  margin: 30px 0px 0px;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 5px;
  transition: all 150ms linear 0s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
    /* color: ${(props) => props.theme.colors.textPrimary}; */
    /* border: 1px solid ${(props) => props.theme.colors.textPrimary}; */
    transition: 0.3s ease-in;

    cursor: pointer;

    a {
      color: ${(props) => props.theme.colors.textPrimary};
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textTerceary};
  }
`;
