import React from "react"

function CreateNote() {
  return (
    <div className="container">
      <form className="note-form">
        <h1>Create/Edit Note</h1>
        <div className="note-box">
          <label htmlFor="nombre">Title</label>
          <input type="text" name="title" placeholder="title.." id="nombre"/>
        </div>
        <div className="note-box">
          <label htmlFor="content">Content</label>
          <textarea placeholder="content..." id="content"></textarea>
        </div>
        <div className="button-box">
          <button className="cancel-button">Cancel</button>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  )
}

export default CreateNote