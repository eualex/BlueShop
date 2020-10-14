import React from "react";

import { Container, CustomInput, CustomLabel, CustomSpan } from "./styles";

interface InputProps {
  name: string;
  type: string;
  labelName: string;  
}

const Input: React.FC<InputProps> = ({ name, type, labelName }) => {
  return (
    <Container>
      <CustomInput type={type} name={name} autoComplete="off" required />
      <CustomLabel htmlFor={name}>
        <CustomSpan>{labelName}</CustomSpan>
      </CustomLabel>
    </Container>
  );
};

export default Input;
