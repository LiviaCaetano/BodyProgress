import "./styles.scss";

type LabelProps = {
  text: string;
  variant: "light" | "solid";
};

export const Label = ({ text, variant }: LabelProps) => {
  return <label className={`input-label input-label-${variant}`}>{text}</label>;
};
