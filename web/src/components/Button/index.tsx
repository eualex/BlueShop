import * as React from "react";

import { ContainerButton } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Button.
 *
 * @param {ButtonProps} props button's props
 * @returns {React.ReactElement<ButtonProps>} Button.
 */
const Button: React.FC<ButtonProps> = ({ children, ...rest  }: ButtonProps): React.ReactElement<ButtonProps> => {
  // const {  } = props;

  return <ContainerButton {...rest}>{children}</ContainerButton>;
};

export default Button;
