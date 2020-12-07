import api from './api';


declare interface Credentials {
  email: string;
  password: string;
}

declare interface User {
  name: string;
  email: string;
  token: string;
}

export const handleLogin = (credentials: Credentials) => 
  api.post<User>("/auth", credentials)
  .then((res) => {
    return res.data;
  })
