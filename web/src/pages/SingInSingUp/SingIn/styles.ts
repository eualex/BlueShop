import styled from "styled-components";

interface Props {
  error?: boolean;
}

export const ContainerForm = styled.form<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 40%;
  width: 100%;

  margin: 20px 0px;

  .email {
    input:focus + label span,
    input:valid + label span {
      color: ${(props) =>
        props.error ? ({ theme }) => theme.colors.primary : "#FF312E"};
    }

    label::after {
      border-bottom: 3px solid
        ${(props) =>
          props.error ? ({ theme }) => theme.colors.primary : "#ff312e"};
    }
  }
`;

export const ContainerSpiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
