import React from "react"
import Note from "../note/Note"

function NoteList({ notes, onNoteSelected, onOpenModal, setModalType }) {

  function handleClick(note) {
    setModalType("noteDetails")
    onNoteSelected(note)
    onOpenModal()
  }

  return (
    <div>
      {notes.map((note, index) => (
        <div key={index} >
          <Note 
            key={index}
            id={index}
            title={note.title}
            onClick={() => handleClick(note)}
          />
        </div>
      ))}
    </div>
  )
}

export default NoteList