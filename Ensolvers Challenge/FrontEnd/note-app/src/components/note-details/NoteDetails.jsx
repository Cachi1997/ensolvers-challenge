import React from "react"
import Modal from "../modal/Modal"

function NoteDetails({ noteSelected, modalOpen, onCloseModal }) {
  return (
    <Modal isOpen={modalOpen} onRequestClose={onCloseModal}>
      <h2>{noteSelected.title}</h2>
      <button onClick={onCloseModal}>Close</button>
    </Modal>
  )
}

export default NoteDetails