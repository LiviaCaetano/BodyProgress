import { createContext, ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Authentication } from "../models/authentication";
import { Person } from "../models/person";
import { createAccount, updatePersonById } from "../services/api";
import { loginRequest } from "../store/modules/auth/actions";

export const AuthenticationContext = createContext<Authentication.Context>({
  isLoading: false,
  handleLogin: (data: Authentication.Login) => {},
  registerPerson: (data: Person.Register) => {},
  handleUpdatePerson: (data: Person.Store, callback: () => void) => {},
  person: {} as any,
});

export const AuthenticationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { person } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (data: Authentication.Login) => {
    setIsLoading(true)
    dispatch(loginRequest(data))
    setIsLoading(false)
  };

  const registerPerson = (data: Person.Register) => {
    setIsLoading(true)
    createAccount(data).then((response) => {
      console.log(response)
      toast.success('Conta criada com sucesso!')
      navigate('/login')
    }).catch((e) => {
      toast.error("Erro ao criar conta!")
      console.log(e)
    }).finally(() => setIsLoading(false))
  };

  const updatedPerson = (data: Person.Store, callback: () => void) => {
    setIsLoading(true)
    updatePersonById(data?.id, data).then(() => {
      toast.success('Usuário atualizado com sucesso!')
      callback()
    }).catch((error) => {
      toast.error('Erro ao atualizar usuário!')
      console.error(error)
    }).finally(() => setIsLoading(false))
  }

  const value = {
    isLoading,
    handleLogin,
    registerPerson,
    handleUpdatePerson: updatedPerson,
    person,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
