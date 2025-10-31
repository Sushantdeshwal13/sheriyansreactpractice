import React from 'react'
import { useState } from 'react'

const App = () => {
  
  let [task, settask] = useState([])

  let getdata = async() =>{
     let data  = await fetch("https://jsonplaceholder.typicode.com/users"
)
     let json =await data.json()
      settask(json);
    console.log(json);
    
  }
  return (
    <div>
       {task.map((elem, idx)=>{
        return <h1 key={idx}> {elem.name}</h1>
       })}
       <button onClick={getdata}>click</button>
    </div>
  )
}

export default App
