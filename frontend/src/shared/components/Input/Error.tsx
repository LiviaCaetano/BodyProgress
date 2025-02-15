import "./styles.scss";

type ErrorProps = {
  hasError?: boolean;
  message?: string;
};

export const Error = ({ message, hasError = false }: ErrorProps) => {
  return (
    <span className="error-message">
      {hasError && (message || "**Campo obrigatório")}
    </span>
  );
};
