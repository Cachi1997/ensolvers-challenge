import React from "react"
import { MdNote, MdDelete, MdArchive, MdEditDocument } from "react-icons/md"
import { FaNoteSticky } from "react-icons/fa6"
import { formatearFecha } from "../../helpers"
import "./note.css"


function Note({ title, onClick}) {
  
  return (
    <div className="note-box" onClick={onClick}>
      <FaNoteSticky size="100" color="#f5ba13" className="note-img"/>
      <div className="note-box-content">
        <h3>{title}</h3>
        <p>Last edited: <span>{formatearFecha()}</span></p>
      </div>
      <div className="note-buttons">
        <button><MdDelete /></button>
        <button><MdEditDocument /></button>
        <button><MdArchive /></button>
      </div>
    </div>
  )
}

export default Note