import React from 'react'
import Left from './Left'
import Right from './Right'

const Pageone = (props) => {
  return (
    <div className='py-10 h-[80vh] flex justify-between  gap-10 items-center  px-10'>
        <Left/>
        <Right user={props.user}/>
    </div>
  )
}

export default Pageone
