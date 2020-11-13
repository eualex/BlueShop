import React, { createContext, useContext } from "react";
import usePersistedState from "../utils/usePersistedState";

interface PropsLogin {
  name: string;
  email: string;
}

interface LoginPropsContext {
  loginData: PropsLogin,
  setLoginData: React.Dispatch<React.SetStateAction<PropsLogin>>;
  loginToken: string;
  setLoginToken: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {
  loginData: {
    name: "",
    email: ""
  },
  setLoginData: () => {},
  loginToken: "",
  setLoginToken: () => {},
};

const LoginContext = createContext<LoginPropsContext>(DEFAULT_VALUE);

const LoginProvider: React.FC = ({ children }) => {
  const [loginToken, setLoginToken] = usePersistedState(
    "authToken",
    DEFAULT_VALUE.loginToken
  );
  const [loginData, setLoginData] = usePersistedState("userData", DEFAULT_VALUE.loginData);

  return (
    <LoginContext.Provider value={{ loginToken, setLoginToken, loginData, setLoginData }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must be used within a LoginProvider");

  const { loginToken, setLoginToken, loginData, setLoginData } = context;
  return { loginToken, setLoginToken, loginData, setLoginData };
};
