import "./styles.scss";

type ErrorProps = {
  message?: string;
  hasError: boolean;
};

export const Error = ({ hasError, message }: ErrorProps) => {
  return hasError && <div className="input-error">** {message}</div>;
};
