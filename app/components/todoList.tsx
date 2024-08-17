
import React from 'react'
import { todoItemsprops } from './Todos';
import TodoDone from './TodoDone';
import TodoDelete from './TodoDelete';

interface todoProps {
  todo: todoItemsprops


}

const TodoList = ({ todo: { _id, title, isDone } }: todoProps) => {


  return (



    <div key={_id} className='flex flex-row justify-between  px-4 text-sm  border-slate-600 border-b py-3'>
      <p className={`text-sm   ${isDone && 'line-through'}`} >{title}</p>
      <div className=' flex flex-row'>
        <TodoDone id={_id} isDone={isDone} />
        <TodoDelete id={_id} />
      </div>
    </div>

  )
}

export default TodoList