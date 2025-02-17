import { ReactNode } from "react";
import "./styles.scss";

type ButtonProps = {
  disabled?: boolean;
  variant: "primary" | "secondary";
  text: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode | any;
};

export const Button = ({
  text,
  disabled = false,
  onClick,
  variant,
  size = "md",
  icon,
}: ButtonProps) => {
  return (
    <button
      className={`button-component button-component-${variant} button-component-${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && icon}
      {text}
    </button>
  );
};
