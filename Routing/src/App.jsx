import { useState } from 'react'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import Home from './rout/Home.jsx'
import About from './rout/About.jsx'
import Footer from './rout/Footer.jsx'
import Not from './rout/Not.jsx'
import Produce from './rout/Produce.jsx'
import Men from './rout/Men.jsx'
import Women from './rout/Women.jsx'
import Kids from './rout/KIds.jsx'
import Courses from './rout/Courses.jsx'
function App() {
 

  return (
    <>
    <div className='flex justify-between bg-amber-400'>
    <h2>navbar</h2>
    <div className='flex gap-10'>
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
     <Link to="/product">Product</Link>
     <Link to="/course">courses</Link>
     
    </div>
    </div>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/course/:id" element={<Courses/>}/>
        <Route path="/product" element={<Produce/>}>
          <Route path="mens" element={<Men/>}/>
          <Route path="womens" element={<Women/>}/>
          <Route path="kids" element={<Kids/>}/>
        </Route>
        <Route path="*" element={<Not/>}/>
       </Routes>
     <Footer/>
    </>
  )
}

export default App
