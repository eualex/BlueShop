import React, { createContext, useContext } from "react";
import usePersistedState from "../utils/usePersistedState";
import api from '../services/api';

interface LoginPropsContext {
  loginToken: string;
  setLoginToken: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {
  loginToken: "",
  setLoginToken: () => {},
};

const LoginContext = createContext<LoginPropsContext>(DEFAULT_VALUE);

const LoginProvider: React.FC = ({ children }) => {
  const [loginToken, setLoginToken] = usePersistedState(
    "authToken",
    DEFAULT_VALUE.loginToken
  );

  api.defaults.headers.authenticate = `Bearer ${loginToken}`

  return (
    <LoginContext.Provider value={{ loginToken, setLoginToken }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must be used within a LoginProvider");

  const { loginToken, setLoginToken } = context;
  return { loginToken, setLoginToken };
};
