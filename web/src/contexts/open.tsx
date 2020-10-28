import React, { createContext, useState, useContext } from 'react';

interface PropsOpenContext {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openMessage: boolean; 
  setOpenMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

const DEFAULT_VALUE = {
  open: false, //open menu Burguer
  setOpen: () => {},
  openMessage: false, //open message error in sing or sing up
  setOpenMessage: () => {},
}

const OpenContext = createContext<PropsOpenContext>( DEFAULT_VALUE );

const OpenProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(DEFAULT_VALUE.open);
  const [openMessage, setOpenMessage] = useState(DEFAULT_VALUE.openMessage);

  return (
    <OpenContext.Provider value={{ open, setOpen, openMessage, setOpenMessage }}>
      {children}
    </OpenContext.Provider>
  );
}

export default OpenProvider;

export const useOpen = () => {
  const context = useContext(OpenContext);

  if (!context) throw new Error("useOpen must be used within a OpenProvider");
  
  const { open, setOpen, openMessage, setOpenMessage } = context;
  
  return { open, setOpen, openMessage, setOpenMessage };
}

