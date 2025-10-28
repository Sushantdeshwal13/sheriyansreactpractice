import React from 'react'

const Rightimage = (props) => {
  return (
    <div className=' h-full w-1/3  rounded-2xl overflow-hidden relative shrink-0'>
        <img className="object-cover h-full w-full" src={props.user} alt="image"></img>
        <div className='h-full w-full  top-0 left-0 absolute flex flex-col justify-between'>
            <h1 className='bg-white rounded-full m-4 items-center font-bold h-12 w-12 flex justify-center '>{props.tag}</h1>
            <div className='text-white px-3 mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nulla?
                </div>
                <div className='flex justify-between m-4 '>
                    <button style={{backgroundColor:props.color}} className='bg-blue-400 rounded-xl px-4'>{props.btn}</button>
                    <button className='bg-blue-400 rounded-xl px-4'>one</button>
                </div>
            
                
        </div>
       
    </div>
  )
}

export default Rightimage
