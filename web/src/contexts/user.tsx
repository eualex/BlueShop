import React, { createContext, useContext } from "react";
import usePersistedState from "../utils/usePersistedState";

interface PropsLogin {
  name: string;
  email: string;
}

interface LoginPropsContext {
  userData: PropsLogin,
  setUserData: React.Dispatch<React.SetStateAction<PropsLogin>>;
  loginToken: string;
  setLoginToken: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {
  userData: {
    name: "",
    email: ""
  },
  setUserData: () => {},
  loginToken: "",
  setLoginToken: () => {},
};

const LoginContext = createContext<LoginPropsContext>(DEFAULT_VALUE);

const LoginProvider: React.FC = ({ children }) => {
  const [loginToken, setLoginToken] = usePersistedState(
    "authToken",
    DEFAULT_VALUE.loginToken
  );
  const [userData, setUserData] = usePersistedState("userData", DEFAULT_VALUE.userData);

  return (
    <LoginContext.Provider value={{ loginToken, setLoginToken, userData, setUserData }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must be used within a LoginProvider");

  const { loginToken, setLoginToken, userData, setUserData } = context;
  return { loginToken, setLoginToken, userData, setUserData };
};
