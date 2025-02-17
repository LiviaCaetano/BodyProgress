import { Person } from "./person";

export namespace Authentication {
  export type Login = {
    username: string;
    password: string;
  };

  export type Context = {
    isLoading: boolean;
    handleLogin: (data: Authentication.Login) => void;
    handleLogout: () => void;
    registerPerson: (data: Person.Register) => void;
    person: { id: number };
  };
}
