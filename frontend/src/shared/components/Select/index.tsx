import { forwardRef, SelectHTMLAttributes } from "react";
import "./styles.scss";

type Option = {
  value: string;
  label: string;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  hasError?: boolean;
  variant: "solid" | "light";
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, hasError = false, variant, ...rest }, ref) => {
    return (
      <div className="select-container">
        {label && (
          <label
            className={`select-label select-label-${variant}`}
            htmlFor={rest?.id}
          >
            {label}
          </label>
        )}
        <select ref={ref} className="custom-select" {...rest}>
          <option value="">Selecione uma opção</option>
          {options?.map((option: Option) => (
            <option key={option?.value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </select>
        {hasError && <span className="error-message">**Campo obrigatório</span>}
      </div>
    );
  }
);
