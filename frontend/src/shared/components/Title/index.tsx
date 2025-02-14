import { ReactNode } from "react";
import "./styles.scss";

type TitleProps = {
  text: string;
  icon?: ReactNode;
};

export const Title = ({ text, icon }: TitleProps) => {
  return (
    <div className="title-component">
      {icon && icon}
      <span>{text}</span>
    </div>
  );
};
