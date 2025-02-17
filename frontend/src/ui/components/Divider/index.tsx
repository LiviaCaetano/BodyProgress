import "./styles.scss";

type DividerProps = {
  text: string;
};

export const Divider = ({ text }: DividerProps) => {
  return (
    <div className="divider">
      <span>{text}</span>
      <div className="divider-line"></div>
    </div>
  );
};
