import React from "react";
import "./styles.scss";

interface ModalProps {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ onClose, title, children }: ModalProps) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
