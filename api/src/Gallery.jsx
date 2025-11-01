import React from 'react'
import { useState, useEffect } from 'react'
const Gallery = () => {

  const [data, setdata] = useState([])
  const [index, setindex]=useState(1);


  const getdata = async ()=>{
    let data = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    let res = await data.json();
    setdata(res)
    console.log(res);
     
  }
  let pre = ()=>{
    if(index>1)
     setindex(index-1);
     
  }
  let next = ()=>{
    setindex(index+1)
  }

     useEffect(()=>{
        getdata();
    },[index])

  return (
    <>
  <div    className='bg-black overflow-auto h-screen text-white flex flex-wrap gap-10'>
    <h1 className='flex flex-col fixed bg-red-400'>{index}</h1>
      
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
           <button 
           style={{opacity:index==1 ? 0.5 : 1}}
           onClick={pre} 
           className='bg-yellow-300 rounded-xl active:scale-95 text-black h-12 w-14 cursor-pointer'>Prev</button>
           <p> Page {index}</p>
           <button onClick={next} className='bg-yellow-300 rounded-xl active:scale-95 text-black h-12 w-14 cursor-pointer'>next</button>
       </div>
   
    </div>
    </>
)}
export default Gallery
