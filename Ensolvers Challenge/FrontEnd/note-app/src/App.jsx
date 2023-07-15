import { useState } from "react"
import CreateNote from "./components/CreateNote"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CreateNote />
    </div>
  )
}

export default App
