import React, { createContext, useContext, useState } from 'react';

interface PropsMessageContext {
  messageError: string;
  setMessageError: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {
  messageError: '',
  setMessageError: () => {}
};

const messageContext = createContext<PropsMessageContext>( DEFAULT_VALUE );

const MessageErrorProvider: React.FC = ({ children }) => {
  const [ messageError, setMessageError ] = useState(DEFAULT_VALUE.messageError);

  return (
    <messageContext.Provider value={{ messageError, setMessageError }}>
      { children }
    </messageContext.Provider>
  );
}

export default MessageErrorProvider;

export const useMessage = () => {
  const context = useContext(messageContext);

  if (!context) throw new Error("useMessage must be used within a MessageProvider");

  const { messageError, setMessageError } = context;
  return { messageError, setMessageError };
}