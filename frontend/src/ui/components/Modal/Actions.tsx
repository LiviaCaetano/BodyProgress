import { ReactNode } from "react";
import "./styles.scss";

type ActionsProps = {
  children: ReactNode;
};

export const Actions = ({ children }: ActionsProps) => {
  return <div className="modal-actions">{children}</div>;
};
