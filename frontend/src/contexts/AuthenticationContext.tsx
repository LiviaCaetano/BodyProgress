import { createContext, ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { Authentication } from "../models/authentication";
import { Person } from "../models/person";

export const AuthenticationContext = createContext<Authentication.Context>({
  isLoading: false,
  handleLogin: (data: Authentication.Login) => {},
  handleLogout: () => {},
  registerPerson: (data: Person.Register) => {},
  person: {} as any,
});

export const AuthenticationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const person = useSelector((state: any) => state.auth);

  const handleLogin = (data: Authentication.Login) => {};

  const handleLogout = () => {};

  const registerPerson = (data: Person.Register) => {};

  const value = {
    isLoading,
    handleLogin,
    handleLogout,
    registerPerson,
    person,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
