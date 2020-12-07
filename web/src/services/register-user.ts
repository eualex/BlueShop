import api from './api';

declare interface Credentials {
  name: string;
  email: string;
  password: string;
}

declare interface User {
  name: string;
  email: string;
  token: string;
}

export const handlerRegister = (credentials: Credentials) => 
  api.post<User>("/users", credentials)
    .then((res) => res.data);