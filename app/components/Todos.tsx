import React from 'react'
import TodoList from './todoList'


export interface todoItemsprops {
  _id: string;
  title: string;
  isDone: boolean

}


const Todos = async() => {

  const res = await fetch("http://localhost:3000/api/todo", { cache:'no-cache'})
  const data : todoItemsprops[] = await res.json()
  
  return (
    <div className='flex flex-col  w-2/5 gap-4 shadow-md shadow-slate-700 p-[3rem]'>
        <div className='flex flex-row gap-[14rem] px-4 text-base  font-mono'>
        <h3  >Name</h3>
               <h3>Action</h3>
               </div>
               <div className='flex flex-col justify-between '>
    {data.map((todo)=>(
 
      <TodoList key={todo._id}  todo ={ todo  } />
    ))}
  
    </div>
    </div>
    
     
   
  
  )
}

export default Todos