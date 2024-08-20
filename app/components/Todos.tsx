import React from 'react'
import TodoList from './todoList'
import Link from 'next/link';
import {sort} from 'fast-sort'
import { TiArrowSortedUp } from "react-icons/ti";


export interface todoItemsprops {
  _id: string;
  title: string;
  isDone: boolean

}
interface props {
  sortOrder: string;
}


const Todos = async({sortOrder}:props) => {

  const res = await fetch("http://localhost:3000/api/todo", { cache:'no-cache'})
  const data : todoItemsprops[] = await res.json()
  const sortedOrder = sort(data).asc(sortOrder=== 'title'? data=> data.title : data => data.isDone )
  
  return (
    <div className='flex flex-col  w-2/5 gap-4 shadow-md shadow-slate-700 p-[3rem]'>
        <div className='flex flex-row gap-[14rem] px-4 text-base  font-mono'>
        <h3 >
        <Link href="/?sortOrder=title" className='flex flex-row items-center'> name <TiArrowSortedUp/></Link>
        </h3>
        <Link href="/?sortOrder=done" className='flex flex-row items-center'> Action <TiArrowSortedUp/></Link>
               </div>
               <div className='flex flex-col justify-between '>
    {sortedOrder.map((todo)=>(
 
      <TodoList key={todo._id}  todo ={ todo  } />
    ))}
  
    </div>
    </div>
    
     
   
  
  )
}

export default Todos