import "./styles.scss";

type HeaderProps = {
  title: string;
  onClose: () => void;
};

export const Header = ({ onClose, title }: HeaderProps) => {
  return (
    <div className="modal-header">
      <h2>{title}</h2>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};
