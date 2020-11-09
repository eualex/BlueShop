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
    margin-bottom: 30px;
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
  margin: 30px 0px;

  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .new-image {
    width: 100%;
    height: 90px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px dashed ${({ theme }) => theme.colors.textPrimary};
    border-radius: 20px;

    padding: 20px 0;
  }

  .input-file {
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 15px;

    font-size: 2rem;
  }
`;

export const InputFile = styled.input`
  display: none;
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;
`;

export const ImageContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 90px;
    border-radius: 20px;

    object-fit: cover;
  }

  svg {
    position: absolute;
    top: 0;
    right: 0;

    cursor: pointer;
  }
`;
export const ContainerTextArea = styled.div`
  label {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 2rem;
  }

  textarea {
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.textLogin};
    border-radius: 20px;
    outline: none;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1.8rem;

    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;

    margin-top: 10px;
  }
`;
