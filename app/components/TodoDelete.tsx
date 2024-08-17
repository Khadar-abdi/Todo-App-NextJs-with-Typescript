"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

 

const TodoDelete = ({id}: {id: string}) => {
    const router = useRouter();

    const handleDelete =async () => {
       

   

        try {
            const res = await fetch(`http://localhost:3000/api/todo/`+ id, {
                method: 'DELETE',                
            });
            await res.json();
            router.refresh();



        } catch (error) {

            console.error(error)

        }

    }

    return (
        <>
                <button onClick={handleDelete} className="btn btn-ghost btn-xs border-red-800 hover:bg-gray-900">delete</button>
        </>
    )
}

export default TodoDelete