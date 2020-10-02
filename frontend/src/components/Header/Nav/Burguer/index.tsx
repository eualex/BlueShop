import React, { useState } from 'react';

import { ContainerBurguer } from './styles';

import RightNav from '../RightNav';

const Burguer: React.FC = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <ContainerBurguer open={open} onClick={() => setOpen(!open)} >
        <div />
        <div />
        <div />
      </ContainerBurguer>
      <RightNav open={open} />
    </>
  );
};

export default Burguer;
