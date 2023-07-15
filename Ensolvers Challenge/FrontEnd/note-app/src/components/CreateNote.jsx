import React, { useState } from "react"

function CreateNote(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(e){
    const { value, name } = e.target
    setNote(prevNote => ({...prevNote, [name]: value}))
  }

  function notEmpty(note){
    if(note.title === "" || note.content === ""){
      alert("Notes can't have empty fields")
      return false
    }
    return true
  }

  function saveNote(e){
    if(notEmpty(note)){
      props.onAdd(note)
    }
    e.preventDefault()
    setNote({
      title: "",
      content: ""
    })
  }
  
  return (
    <div className="container">
      <form className="note-form" onChange={handleChange}>
        <h1>Create/Edit Note</h1>
        <div className="note-box">
          <label htmlFor="nombre">Title</label>
          <input type="text" name="title" placeholder="title.." value={note.title} id="nombre"/>
        </div>
        <div className="note-box">
          <label htmlFor="content">Content</label>
          <textarea placeholder="content..." name="content" value={note.content} id="content"></textarea>
        </div>
        <div className="button-box">
          <button className="cancel-button">Cancel</button>
          <button className="save-button" onClick={saveNote}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default CreateNote