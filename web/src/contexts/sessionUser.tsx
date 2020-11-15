import React, { createContext, useContext, useState } from "react";

interface PropsSessionContext {
  openSession: boolean;
  setOpenSession: React.Dispatch<React.SetStateAction<boolean>>;
  messageSession: string;
  setMessageSession: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_VALUE: PropsSessionContext = {
  openSession: false,
  setOpenSession: () => {},
  messageSession: "",
  setMessageSession: () => {},
};

const SessionContext = createContext<PropsSessionContext>(DEFAULT_VALUE);

const SessionProvider: React.FC = ({ children }) => {
  const [openSession, setOpenSession] = useState(DEFAULT_VALUE.openSession);
  const [messageSession, setMessageSession] = useState(
    DEFAULT_VALUE.messageSession
  );

  return (
    <SessionContext.Provider
      value={{ openSession, setOpenSession, messageSession, setMessageSession }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;

export const useSessionUser = () => {
  const context = useContext(SessionContext);

  if (!context)
    throw new Error("useSessionUser must be used within a SessionProvider!");

  const {
    messageSession,
    setMessageSession,
    openSession,
    setOpenSession,
  } = context;
  return { messageSession, setMessageSession, openSession, setOpenSession };
};
