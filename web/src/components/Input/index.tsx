import React from "react";

import { Container, CustomInput, CustomLabel, CustomSpan } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  name: string;
  type: string;
  labelName: string;
}

const Input: React.FC<InputProps> = ({ className, name, type, labelName, onChange }: InputProps) => {
  return (
    <Container className={className}>
      <CustomInput onChange={onChange} type={type} name={name} autoComplete="off" required />
      <CustomLabel htmlFor={name}>
        <CustomSpan>{labelName}</CustomSpan>
      </CustomLabel>
    </Container>
  );
};

export default Input;
