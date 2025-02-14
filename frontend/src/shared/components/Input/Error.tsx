import "./styles.scss";

type ErrorProps = {
  hasError?: boolean;
  message?: string;
};

export const Error = ({ message, hasError = false }: ErrorProps) => {
  return hasError && <span className="error-message">{message}</span>;
};
