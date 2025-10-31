import { useState } from 'react'
import Notes from './Notes'
import './App.css'
import Api from './Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Api/>
      
    </>
  )
}

export default App
