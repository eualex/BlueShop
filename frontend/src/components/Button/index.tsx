import React from 'react';

import { ContainerButton } from './styles';

const Button: React.FC = ({ children }) => {
  return (
    <ContainerButton>
      {children}
    </ContainerButton>
  );
};

export default Button;
