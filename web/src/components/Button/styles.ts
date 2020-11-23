import styled from "styled-components";

export const ContainerButton = styled.button`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textTerceary};
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: 30px;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 5px;
  transition: all 150ms linear 0s;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textTerceary};
    width: 100%;
    z-index: 20;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
    transition: 0.3s ease-in;

    cursor: pointer;
  }
`;
