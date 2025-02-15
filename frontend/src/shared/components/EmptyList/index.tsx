import { EmptyListIcon } from "../../../assets/svgIcons/EmptyListIcon";
import "./styles.scss";

type EmptyListProps = {
  text?: string;
};

export const EmptyList = ({ text }: EmptyListProps) => {
  return (
    <div className="empty-list">
      <div className="empty-list-icon">
        <EmptyListIcon />
      </div>
      <span>{text || "Nenhum item encontrado..."}</span>
    </div>
  );
};
