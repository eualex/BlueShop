import styled from "styled-components";

import { Types } from "./index";

interface Props {
  customSize: Types;
}

export const ContainerSelect = styled.div<Props>`
  border: ${(props) =>
    props.customSize === "small"
      ? `2px solid ${props.theme.colors.textTerceary}`
      : `2px solid ${props.theme.colors.textQuintenary}`};
  /* border: 2px solid ${({ theme }) => theme.colors.textQuintenary}; */
  border-radius: ${(props) => (props.customSize === "small" ? "5px" : "10px")};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${(props) => (props.customSize === "small" ? "0 10px" : "0")};

  svg {
    order: 1;
  }
`;

export const Select = styled.select<Props>`
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";

  padding: ${(props) =>
    props.customSize === "big" ? "15px" : "10px 0 10px 10px"};

  width: ${(props) => (props.customSize === "big" ? "90%" : "70%")};
  height: 100%;

  border: none;
  border-radius: 5px;

  background-color: transparent;
  color: ${(props) =>
    props.customSize === "small"
    ? props.theme.colors.textTerceary
    : props.theme.colors.textPrimary};
  /* color: ${({ theme }) => theme.colors.textPrimary}; */
  font-size: ${(props) => (props.customSize === "big" ? "2rem" : "1.4rem")};

  option {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    /* padding: 10px; */
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 968px) {
    font-size: 2rem;
  }
`;
