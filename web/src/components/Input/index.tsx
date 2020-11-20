import React, { useState } from "react";

import { CustomInput, Label } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  labelValue?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  labelValue,
  onChange,
  ...rest
}: InputProps) => {
  const [focus, setFocus] = useState(false);
   
  return (
    <>
      {labelValue && <Label focus={focus} htmlFor={name}>{labelValue}:</Label>}
      <CustomInput
        {...rest}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        autoComplete="off"
        required
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </>
  );
};

export default Input;
