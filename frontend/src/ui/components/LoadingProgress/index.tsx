import "./styles.scss";

type LoadingProgressProps = {
  text?: string;
};

export const LoadingProgress = ({ text }: LoadingProgressProps) => {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">{text || "Carregando..."}</p>
      </div>
    </div>
  );
};
