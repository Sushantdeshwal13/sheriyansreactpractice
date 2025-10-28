import React from 'react'
import Rightcard from './Rightcard'

const Right = (props) => {
  return (
    <div className=' h-full  w-2/3 p-4'>
      <Rightcard user={props.user}/>
    </div>
  )
}

export default Right
