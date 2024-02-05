import React from "react";
import "../../styles/modal.css";
export const Modal = ({ isOpen, onClose, onConfirm, modalInfo }) => {
  if (isOpen === false) return null;

  return (
    <div className="modal">
      <div className="modalContent">
        {modalInfo}
        <button onClick={onClose}>Oh no!</button>
        <button onClick={onConfirm}>Yes baby!</button>
      </div>
    </div>
  );
};
