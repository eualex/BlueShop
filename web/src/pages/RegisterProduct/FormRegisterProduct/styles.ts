import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  width: 100%;

  margin: 30px 0px;
  /* padding: 20px; */

  input {
    margin-bottom: 30px;
  }

  .form-select {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.background};
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

export const ContainerInputFile = styled.div`
 
`;

export const InputFile = styled.input`
  
`;
