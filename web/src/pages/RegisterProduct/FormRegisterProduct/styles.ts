import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  /* width: 80%; */

  margin: 30px 0px;
  /* padding: 20px; */

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
  position: relative;

  svg {
    position: absolute;
    /* right: 0;
    bottom: 0; */
    top: 45%;
    right: 0;
    margin-right: 20px;
  }
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";

  width: 100%;
  padding: 10px;
  margin-top: 13px;

  border: none;
  border-radius: 5px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2rem;

  option {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.background};
    padding: 10px;
  }
`;

export const InputFile = styled.input``;

export const ContainerInputFile = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
  
  p {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1rem;

    @media(max-width: 768px) {
      margin-bottom: 20px;
      height: 20px;
      text-align: center;
    }
  }

  input[type="file"] {
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  label {
    position: absolute;

    margin-top: 10px;
    padding: 10px 10px;
    width: 100%;
    height: 40px;

    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};

    text-transform: uppercase;
    text-align: center;
    cursor: pointer;

    display: block;

    border-radius: 5px;

    @media(max-width: 768px) {
      background-color: ${({ theme }) => theme.colors.backgroundTerceary};
      height: 30px;
    }
  }
`;
