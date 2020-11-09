import React, { createContext, useContext, useState } from 'react';

interface PropsMessageContext {
  openError: boolean;
  setOpenError: React.Dispatch<React.SetStateAction<boolean>>;
  messageError: string;
  setMessageError: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {
  openError: false,
  setOpenError: () => {},
  messageError: '',
  setMessageError: () => {}
};

const ErrorContext = createContext<PropsMessageContext>( DEFAULT_VALUE );

const MessageErrorProvider: React.FC = ({ children }) => {
  const [ messageError, setMessageError ] = useState(DEFAULT_VALUE.messageError);
  const [ openError, setOpenError ] = useState(DEFAULT_VALUE.openError);

  return (
    <ErrorContext.Provider value={{ openError, setOpenError, messageError, setMessageError }}>
      { children }
    </ErrorContext.Provider>
  );
}

export default MessageErrorProvider;

export const useErrorMessage = () => {
  const context = useContext(ErrorContext);

  if (!context) throw new Error("useMessage must be used within a ErrorProvider");

  const { messageError, setMessageError, openError, setOpenError } = context;
  return { messageError, setMessageError,  openError, setOpenError };
};
