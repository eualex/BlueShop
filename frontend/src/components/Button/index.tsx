import * as React from 'react';

import { ContainerButton } from './styles';

interface ButtonComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactChild;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

const Button = ({ onClick, children, ...otherProps }: ButtonComponentProps) => {

  return (
    <ContainerButton onClick={onClick} {...otherProps}>{children}</ContainerButton>
  );
}

export default Button;
