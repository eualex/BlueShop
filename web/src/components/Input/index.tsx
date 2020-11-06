import React from "react";

import { CustomInput } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <CustomInput
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      name={name}
      autoComplete="off"
      required
    />
  );
};

export default Input;
