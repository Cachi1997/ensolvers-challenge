import React from "react"

function Modal({ isOpen, onRequestClose, children }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onRequestClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal