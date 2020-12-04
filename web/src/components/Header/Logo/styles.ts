import styled from "styled-components";

export const Container = styled.div`
  a {
    font-family: Lobster;
    font-weight: bold;
    font-size: 3.2rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};

    width: 150px;
  }
`;
