import React, { useState } from 'react';

import { ContainerBurguer } from './styles';

import RightNav from '../RightNav';

const Burguer: React.FC = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <ContainerBurguer open={open} onClick={() => setOpen(!open)} >
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </ContainerBurguer>
      <RightNav open={open} />
    </>
  );
};

export default Burguer;
