import React, { useState } from "react"
import { IoMdCreate } from "react-icons/io"
import { MdSaveAlt } from "react-icons/md"
import "./header.css"

function Header({ setModalType, onCreateNoteClick }) {

  function handleClick(){
    setModalType("createNote")
    onCreateNoteClick()
  }

  return (
    <div>
      <header>
        <h1>My Notes</h1>
        <button onClick={handleClick}>
          <IoMdCreate />
					Create Note
        </button>
        <a href="/links"><MdSaveAlt />Archived Notes</a>
      </header>
    </div>
  )
}

export default Header