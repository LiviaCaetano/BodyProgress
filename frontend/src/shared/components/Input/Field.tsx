import "./styles.scss";

type FieldProps = {
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
};

export const Field = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: FieldProps) => {
  return (
    <input
      id={id}
      type={type}
      className="custom-input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      required={required}
    />
  );
};
