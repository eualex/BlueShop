import React, {createContext, useContext } from 'react';
import usePersistedState from '../utils/usePersistedState';

interface PropsLoginState {
  token: string;
  value: boolean;
}

interface LoginPropsContext { 
  login: PropsLoginState;
  setLogin: React.Dispatch<React.SetStateAction<PropsLoginState>>
}

const DEFAULT_VALUE = {
  login: {
    token: "",
    value: false,
  },
  setLogin: () => {}
};

const LoginContext = createContext<LoginPropsContext>(DEFAULT_VALUE);

const LoginProvider: React.FC = ({ children }) => {
  const [login, setLogin] = usePersistedState('authToken', DEFAULT_VALUE.login);

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider;

export const useLogin = () => {
  const context = useContext(LoginContext);
  if(!context) throw new Error("useLogin must be used within a LoginProvider");

  const { login, setLogin } = context;
  return { login, setLogin };
}