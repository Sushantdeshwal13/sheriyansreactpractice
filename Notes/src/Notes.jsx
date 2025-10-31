import React from 'react'
import { useState  } from 'react';

const Notes = () => {
   let [title, settitle] = useState('');
   let [data, setdata] = useState('');
  
   let [task, settask] = useState([]);
   
   const sumbithandler =(e)=>{
       e.preventDefault();
       let copytask = [...task];
       copytask.push({title,data});
       settask(copytask);
       console.log(copytask)
      settitle('');
      setdata(''); 
   }

    const deletetask = (idx)=>{
      let copytask = [...task];
      copytask.splice(idx,1);
      settask(copytask);
    }

  return (
    <div className="bg-black h-screen lg:flex w-screen text-white">
    <form onSubmit={sumbithandler} className='flex flex-col  lg:w-1/2 gap-4 p-10 items-start'>
      
     <h1 className='font-bold text-2xl '>Add Notes</h1>
      <input type="text"
      placeholder='Enter notes Title'
      className='w-full px-5  py-2 font-medium border-2 rounded bg-black'
      value={title}
      onChange={(e)=>{settitle(e.target.value)}}></input>

      <textarea type="text"
       placeholder="write data"
      className='w-full bg-black font-medium border-2 my-2 rounded h-32'
      value={data}
      onChange={(e)=>setdata(e.target.value)}> </textarea>

      <button onClick={sumbithandler} className='w-full px-5 my-2 active:bg-gray-300 active:scale-95 bg-white text-black rounded h-10'>Add Notes</button>
  
    </form>

    <div className='p-10 lg:w-1/2 lg:border-l-2  bg-gray-900 w-full'>
    <h1 className='text-3xl font-bold'> Recent Notes</h1>
     <div id="scroll" className='flex flex-wrap gap-4 mt-6 overflow-auto h-full'>
      {task.map(function(elem,idx){
        return  <div key={idx} className='h-52 pt-6 p-4 w-40 rounded-2xl bg-white text-black'>
           <div>
          <h2 className=''>❌</h2>
          <h3 className='text-xl leading-tight font-bold'>{elem.title}</h3>
          <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.data}</p>
        </div>
           <button onClick={()=>{
               deletetask(idx)
                 }} className='w-full bg-red-600 text-white mt-10 rounded-2xl cursor-pointer active:scale-95 font-bold py-1 text-xs'>Delete</button>
        </div>
      })} 
      </div>
    </div>
    </div>
  )
}

export default Notes
