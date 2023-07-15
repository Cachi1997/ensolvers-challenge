import { useState } from "react"
import CreateNote from "./components/CreateNote"

function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }
  
  return (
    <div>
      <CreateNote onAdd={addNote}/>
    </div>
  )
}

export default App
