import {
  ComponentPropsWithRef,
  forwardRef,
  HTMLInputTypeAttribute,
  useState,
} from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./styles.scss";

interface FieldProps extends ComponentPropsWithRef<"input"> {
  type?: HTMLInputTypeAttribute;
  variant?: "default" | "white";
}

export const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { type = "text", variant = "default", ...rest },
  ref
) {
  const [showPass, setShowPass] = useState<boolean>(false);
  const password = type === "password";

  const handleFieldType = () =>
    type === "password" ? (showPass ? "text" : "password") : type;

  const handleTogglePass = () => {
    return (
      <div
        className="custom-input-password"
        onClick={() => setShowPass(!showPass)}
      >
        {!showPass ? <FaEye size={25} /> : <FaEyeSlash size={25} />}
      </div>
    );
  };
  return (
    <div className="input-container">
      <input
        ref={ref}
        type={handleFieldType()}
        className={`custom-input custom-input-${variant}`}
        pattern="^[^,]*$"
        {...rest}
      />
      {password && handleTogglePass()}
    </div>
  );
});
