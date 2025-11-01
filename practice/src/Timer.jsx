import React from 'react'
import { useEffect } from 'react'

const Timer = () => {
   useEffect(()=>{
    let timer = setInterval(()=>{
        console.log("timer is runnig")
   },1000)
   return ()=>{
    clearInterval(timer);
   }
   })
  return (
    <div>
       timer is running..
    </div>
  )
}

export default Timer
