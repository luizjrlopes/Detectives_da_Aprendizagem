// src/components/Modal.jsx
import React from 'react';

const Modal = ({ open, onClose, children }) => (
  open ? (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null
);

export default Modal;
