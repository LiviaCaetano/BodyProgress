import "./styles.scss";

type FieldProps = {
  type?: string;
  placeholder?: string;
  hasError?: boolean;
};

export const Field = ({
  type = "text",
  placeholder = "",
  hasError = false,
}: FieldProps) => {
  return (
    <div className={`input-field ${hasError && "input-field-error"}`}>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
