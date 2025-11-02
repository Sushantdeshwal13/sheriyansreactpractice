import { useState } from 'react'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import Home from './rout/Home.jsx'
import About from './rout/About.jsx'

function App() {
 

  return (
    <>
    <div className='flex justify-between bg-amber-400'>
    <h2>navbar</h2>
    <div className='flex gap-10'>
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
    </div>
    </div>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
       </Routes>
   
    </>
  )
}

export default App
