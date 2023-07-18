import { useState } from "react"
import CreateNote from "./components/CreateNote"
import Header from "./components/Header"

function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }
  
  return (
    <div>
      <Header onAdd={addNote}/>
      {
        notes.map
      }
      {/*<CreateNote onAdd={addNote}/>*/}
    </div>
  )
}

export default App
