import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  
  width: 100%;
  height: 50px;
   
  font-size: 1.6rem;
  overflow: hidden;

  input:focus + label span, input:valid + label span {
    transform: translateY(-123%);
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary };
  }

  input:focus + label::after, input:valid + label::after {
    transform: translateX(0%);
  }
`;

export const CustomInput = styled.input`
  width: 100%;
  height: 100%;

  padding-top: 20px;
  border: none;

  color: #595f6e;

  outline: none;
`;

export const CustomLabel = styled.label`
  position: absolute;
  bottom: 0px;
  left: 0%;

  width: 100%;
  height: 100%;

  pointer-events: none;

  border-bottom: 1px solid #000;

  &::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -1px;

    height: 100%;
    width: 100%;

    border-bottom: 3px solid ${({ theme }) => theme.colors.primary };

    transform: translateX(-100%);

    transition: transform 0.3s ease;
  }
`;

export const CustomSpan = styled.span`
  position: absolute;
  bottom: 5px;
  left: 0px;

  transition: all 0.3s ease;
`;

