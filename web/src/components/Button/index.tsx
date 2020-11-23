import * as React from "react";
import { useHistory } from "react-router-dom";

import { ContainerButton } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  link?:string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  link="",
  ...rest
}: ButtonProps): React.ReactElement<ButtonProps> => {
  const history = useHistory();

  const handleLink= () => {
    return link ? history.push(link) : "";
  }

  return <ContainerButton onClick={handleLink} {...rest}>{children}</ContainerButton>;
};

export default Button;
