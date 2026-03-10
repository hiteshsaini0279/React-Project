import { useState } from 'react'
// import './App.css'
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SearchBox />
    <InfoBox />
    </>
  )
}

export default App
