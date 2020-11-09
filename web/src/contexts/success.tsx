import React, { createContext, useContext, useState } from "react";

interface PropsMessageContext {
  openSuccess: boolean;
  setOpenSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  messageSuccess: string;
  setMessageSuccess: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {
  openSuccess: false,
  setOpenSuccess: () => {},
  messageSuccess: "",
  setMessageSuccess: () => {},
};

const SuccessContext = createContext<PropsMessageContext>(DEFAULT_VALUE);

const MessageSuccessProvider: React.FC = ({ children }) => {
  const [messageSuccess, setMessageSuccess] = useState(
    DEFAULT_VALUE.messageSuccess
  );
  const [openSuccess, setOpenSuccess] = useState(DEFAULT_VALUE.openSuccess);

  return (
    <SuccessContext.Provider
      value={{ openSuccess, setOpenSuccess, messageSuccess, setMessageSuccess }}
    >
      {children}
    </SuccessContext.Provider>
  );
};

export default MessageSuccessProvider;

export const useSuccessMessage = () => {
  const context = useContext(SuccessContext);

  if (!context)
    throw new Error("useMessage must be used within a ErrorProvider");

  const {
    messageSuccess,
    setMessageSuccess,
    openSuccess,
    setOpenSuccess,
  } = context;
  return { messageSuccess, setMessageSuccess, openSuccess, setOpenSuccess };
};
