import "./styles.scss";

type LabelProps = {
  text: string;
};

export const Label = ({ text }: LabelProps) => {
  return <div className="input-label">{text}</div>;
};
