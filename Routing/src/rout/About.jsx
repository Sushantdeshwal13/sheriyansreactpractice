import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
   const navigate = useNavigate()
  let back = ()=>{
    navigate('/');
  }
  let plus = ()=>{
    navigate(-1);
  }
  return (
    <div>
      <button onClick={back}className='bg-green-500 p-2 cursor-pointer rounded-2xl m-3'>Back to Basics</button>
      <button onClick={plus}className='bg-green-500 p-2 cursor-pointer rounded-2xl m-3'>plus to basics</button>
      
      <h1>About</h1>
    </div>
  )
}

export default About
