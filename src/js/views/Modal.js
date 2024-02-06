import React from "react";
import "../../styles/modal.css";
export const Modal = ({ isOpen, onClose, onConfirm, modalInfo }) => {
  if (isOpen === false) return null;

  return (
    <div className="modal">
      <div className="modalContent">
        <h2>Are you sure?</h2>
        <button onClick={onClose}>Oh no!</button>
        <button onClick={onConfirm}>Yes baby!</button>
      </div>
    </div>
  );
};
