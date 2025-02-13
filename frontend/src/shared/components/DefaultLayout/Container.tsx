import { ReactNode } from "react";
import "./styles.scss";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className="default-layout-container">{children}</div>;
};
