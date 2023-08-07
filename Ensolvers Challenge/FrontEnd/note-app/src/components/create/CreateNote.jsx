import React, { useState } from "react"
import "./createNote.css"
import "../modal/modal.css"
import Modal from "../modal/Modal"
import { predefinedCategories } from "../../helpers"
import ListCategories from "../categorie/ListCategories"


function CreateNote({ modalOpen, onCloseModal, onSaveNote }) {

  const [categorie, setCategorie] = useState([])

  const note = {
    title: "",
    content: "",
    categorie: []
  }

  function handleAddCategorie(e){
    
    if(categorie && !note.categorie.includes(categorie)){
      const newAddedCategories = [...note.categorie, categorie]
      note.categorie = newAddedCategories
      setCategorie("")
    }
    console.log(note.categorie)
    e.preventDefault()
  }

  function removeCategorie(){

  }

  function handleChange(e){
    const { value, name } = e.target
  }

  function notEmpty(note){
    if(note.title === "" || note.content === ""){
      alert("Notes can't have empty fields")
      return false
    }
    return true
  }

  function saveNote(e){
    note.title = e.target.title.value
    note.content = e.target.content.value
    note.categorie = e.target.categories.value
    if(notEmpty(note)){
      onSaveNote(note)
    }
    e.preventDefault()
  }

  return (
    <Modal isOpen={modalOpen} onRequestClose={onCloseModal}>
      <div className="modal-color">
        <form onSubmit={saveNote} onChange={handleChange}>
          <h2>Create/Edit Note</h2>
          <div className="create-box">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" placeholder="title.." id="title"/>
          </div>
          <div className="create-box">
            <label htmlFor="content">Content</label>
            <textarea placeholder="content..." name="content" id="content"></textarea>
          </div>
          <div>
            <label htmlFor="categories">Categories</label>
            <select value={categorie} onChange={(e) => setCategorie(e.target.value)}>
              <option value="">new-category</option>
              {
                predefinedCategories.map((selectedCategorie) => (
                  <option key={selectedCategorie} value={selectedCategorie}>
                    {selectedCategorie}
                  </option>
                ))
              }
            </select>
            <button onClick={handleAddCategorie}>Add</button>
            {/* {
              notEmpty(note.categorie) && (
                <ListCategorie 
                  name={note.categorie}
                  onClick={removeCategorie}
                />
              )
            } */}
          </div>
          <div className="button-box">
            <button className="cancel-button" onClick={onCloseModal}>Cancel</button>
            <input className="save-button" type="submit" value="Save" />
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default CreateNote