import React from "react"
import { IoMdCreate } from "react-icons/io"
import { MdSaveAlt } from "react-icons/md"

function Header() {
  return (
    <div>
      <header>
        <h1>My Notes</h1>
        <button>
          <IoMdCreate color=""/>
					Create Note
        </button>
        <a href="/links"><MdSaveAlt />Archived Notes</a>
      </header>
    </div>
  )
}

export default Header