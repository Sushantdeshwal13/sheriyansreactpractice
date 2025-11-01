import React from 'react'
import { useState, useEffect } from 'react'
const Gallery = () => {

  const [data, setdata] = useState([])


  const getdata = async ()=>{
    let data = await fetch('https://picsum.photos/v2/list?page=3&limit=30')
    let res = await data.json();
    setdata(res)
    console.log(res);
     
  }

     useEffect(()=>{
        getdata();
    },[])

  return (
    <>
  <div    className='bg-black overflow-auto h-screen text-white flex flex-wrap gap-10'>
      
      {data.map((elem,idx)=>{
        return (
        
       
        <div key={idx} className=' h-40 w-44'>
        <h1 >{elem.author}</h1>
         <a href={elem.url} target="_blank">
        <img className="object-cover"src={elem.download_url}></img>
        </a>
        </div>
       
)})}
       <div className='gap-10 flex  justify-center items-center  w-full m-20'>
           <button className='bg-yellow-300 rounded-xl active:scale-95 text-black h-12 w-14'>Prev</button>
           <button className='bg-yellow-300 rounded-xl active:scale-95 text-black h-12 w-14 '>next</button>
         
   </div>
   
  </div>

  
   </>
)}

export default Gallery
