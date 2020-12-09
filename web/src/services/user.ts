import api from "./api";

type Token = string;
type Admin = boolean;
type Name = string;

declare interface Credentials {
  email: string;
  password: string;
}

declare interface User {
  name: string;
  email: string;
}

export const handleLogin = (credentials: Credentials) =>
  api.post<User & { token: Token }>("/auth", credentials).then((res) => {
    return res.data;
  });

export const handlerRegister = (credentials: Credentials & { name: Name }) =>
  api
    .post<User & { token: Token }>("/users", credentials)
    .then((res) => res.data);

export const handleGetUser = () =>
  api.get<User & { admin: Admin }>("/user").then((res) => res.data);
