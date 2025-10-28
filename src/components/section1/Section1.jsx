import React from 'react'
import Navbar from './Navbar'
import Pageone from './Pageone'

const Section1 = (props) => {
  return (
    <div className='w-full h-screen '>
       <Navbar/>
       <Pageone user={props.user}/>
    </div>
  )
}

export default Section1
