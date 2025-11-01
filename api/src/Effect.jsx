import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Effect = () => {

    let [data, setdata] = useState(0);
    let [data2, setdata2] = useState(0);
    let counter =()=>{
      setdata(data+1)
    }
    let counter2=()=>{
        setdata2(data2+1);
    }
    useEffect(()=>{
        console.log('increadin')
    },)
  return (
    <div>
        <h1>{data}</h1>
        <h1>{data2}</h1>
      <button onClick={counter}>click</button><br></br>
      <button onClick={counter2}>click</button>
    </div>
  )
}

export default Effect
