"use client"
import { useRouter } from 'next/navigation';
 
import React from 'react'

const TodoForm = () => {
  const router = useRouter();

  const submitHandle = async(event: React.FormEvent)=>{
    event.preventDefault();

    const form   = event.target as HTMLFormElement; 
  
    

     
const formData = new FormData(form);

const data ={
  title: formData.get("title")
}


try {
 
  

  const res = await fetch('http://localhost:3000/api/todo',{
    method: 'POST',
    body: JSON.stringify(data)
  } )
  await res.json()
 router.refresh()
 form.reset();
  console.log(res)
  
} catch (error) {

  console.log(error)
  
}


  }

  return (
    <form onSubmit={submitHandle} className='flex w-4/12 gap-2'>
        
        <input
        name='title'
        id='title'
  type="text"
  placeholder="Type here"
  className="input input-bordered input-md w-full max-w-xs" />
        <button type='submit' className="btn btn-outline hover:bg-gray-800 hover:text-white px-5 py-1 ">save</button>
    </form>
  )
}

export default TodoForm