import "./styles.scss";

type LabelProps = {
  htmlFor: string;
  text: string;
};

export const Label = ({ htmlFor, text }: LabelProps) => {
  return (
    <label className="input-label" htmlFor={htmlFor}>
      {text}
    </label>
  );
};
