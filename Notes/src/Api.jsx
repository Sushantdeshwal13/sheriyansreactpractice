import React from 'react'

const Api = () => {
    const getdata = async()=>{
        const response =await  fetch('https://jsonplaceholder.typicode.com/todos/1')
        console.log(response);
        
      }
  return (
    <div>
       <button onClick={getdata}>Get data</button>
    </div>
  )
}

export default Api
