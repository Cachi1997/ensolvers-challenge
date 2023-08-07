import { useState } from "react"
import CreateNote from "./components/create/CreateNote"
import Header from "./components/header/Header"
import NoteList from "./components/note-list/NoteList"
import NoteDetails from "./components/note-details/NoteDetails"

function App() {
  const [notes, setNotes] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [noteSelected, setNoteSelected] = useState(null)
  const [modalType, setModalType] = useState(null)

  function openModal () {
    setModalOpen(true)
  }

  function closeModal(e){
    e.preventDefault()
    setModalOpen(false)
    setModalType(null)
  }

  function handleSaveNote (newNote){
    setNotes([...notes, newNote])
    setModalOpen(false)
  }

  return (
    <div>
      <Header
        setModalType={setModalType} 
        onCreateNoteClick={openModal}
      />
      {
        modalType === "createNote" && (
          <CreateNote 
            modalOpen={modalOpen}
            onCloseModal={closeModal}
            onSaveNote={handleSaveNote}
          />
        )
      }
      <NoteList 
        notes={notes}
        onNoteSelected={(note) => setNoteSelected(note)}
        onOpenModal={openModal}
        setModalType={setModalType}
      />
      {
        noteSelected && modalType === "noteDetails" &&(
          <NoteDetails 
            noteSelected={noteSelected}
            modalOpen={modalOpen}
            onCloseModal={closeModal}
          />
        )
      }
    </div>
  )
}

export default App
