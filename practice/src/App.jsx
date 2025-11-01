import React, { useState } from 'react'
import Timer from './Timer'

const App = () => {
let [show, setshow] = useState(true)
  let get = ()=>{
     setshow(!show)
  }
  return (
    <div>
        <button onClick={get}>{show ?"not show":"show"}</button>
        {show && <Timer/>}
    </div>
  )
}

export default App
