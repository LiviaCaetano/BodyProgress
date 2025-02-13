import "./styles.scss";

type ButtonProps = {
  disabled?: boolean;
  variant: "primary" | "secondary";
  text: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
};

export const Button = ({
  text,
  disabled = false,
  onClick,
  variant,
  size = "md",
}: ButtonProps) => {
  return (
    <button
      className={`button-component button-component-${variant} button-component-${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
