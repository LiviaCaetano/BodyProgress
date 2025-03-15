import { Person } from "./person";

export namespace Authentication {
  export type Login = {
    username: string;
    password: string;
  };

  export type Context = {
    isLoading: boolean;
    handleLogin: (data: Authentication.Login) => void;
    registerPerson: (data: Person.Register) => void;
    handleUpdatePerson: (data: Person.Store, callback: () => void) => void;
    person: Person.Store;
  };
}
