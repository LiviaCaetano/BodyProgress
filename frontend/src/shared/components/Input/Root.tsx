import { ReactNode } from "react";
import "./styles.scss";

type RootProps = {
  children: ReactNode;
};

export const Root = ({ children }: RootProps) => {
  return <div className="input-container">{children}</div>;
};
