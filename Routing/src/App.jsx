import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './rout/Home.jsx'
import About from './rout/About.jsx'

function App() {
 

  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
   
    </>
  )
}

export default App
