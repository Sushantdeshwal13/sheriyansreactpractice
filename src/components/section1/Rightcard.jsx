import React from 'react'
import Rightimage from './Rightimage'

const Rightcard = (props) => {

  return (
    <>
    <div className='flex gap-10 rounded-4xl overflow-x-auto flex-nowrap ' id="right">
        {props.user.map((elem, idx)=>{
            return <Rightimage key={idx} user={elem.image} tag={elem.tag} btn={elem.data} color={elem.color}/>
    
        })}
    

    </div>
    </>
  )
}

export default Rightcard
