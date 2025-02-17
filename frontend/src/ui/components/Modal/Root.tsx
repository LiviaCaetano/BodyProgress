import { ReactNode } from "react";
import "./styles.scss";

type RootProps = {
  children: ReactNode;
};

export const Root = ({ children }: RootProps) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
