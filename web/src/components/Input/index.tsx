import React, { InputHTMLAttributes } from "react";

import { Container, CustomInput, CustomLabel, CustomSpan } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  name: string;
  type: string;
  labelName: string;
}

const Input: React.FC<InputProps> = ({ name, type, labelName, onChange }: InputProps) => {
  return (
    <Container>
      <CustomInput onChange={onChange} type={type} name={name} autoComplete="off" required />
      <CustomLabel htmlFor={name}>
        <CustomSpan>{labelName}</CustomSpan>
      </CustomLabel>
    </Container>
  );
};

export default Input;
