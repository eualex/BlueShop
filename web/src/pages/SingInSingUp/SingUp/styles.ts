import styled from "styled-components";

interface Props {
  error?: boolean;
}

export const ContainerForm = styled.form<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 40%;
  /* width: 80%; */

  margin: 20px 0px;

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.background};
  }

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

export const ConteinerTermOfService = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};

  label {
    margin-left: 5px;
  }
`;

export const ContainerLoader = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
