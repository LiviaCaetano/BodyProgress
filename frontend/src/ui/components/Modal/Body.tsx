import { ReactNode } from "react";
import "./styles.scss";

type BodyProps = {
  children: ReactNode;
};

export const Body = ({ children }: BodyProps) => {
  return <div className="modal-body">{children}</div>;
};
