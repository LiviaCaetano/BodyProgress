import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isLogged } = useSelector((state: any) => state.auth);

  return isLogged ? children : <Navigate to={"/login"} />;
};
