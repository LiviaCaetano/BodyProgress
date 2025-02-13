import { ReactNode } from "react";
import "./styles.scss";

type RootProps = {
  children: ReactNode;
};

export const Root = ({ children }: RootProps) => {
  return <div className="default-layout-root">{children}</div>;
};
