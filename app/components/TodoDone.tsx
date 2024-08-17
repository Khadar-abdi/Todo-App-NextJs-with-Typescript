"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
interface todo {
    id: string

    isDone: boolean

}

const TodoDone =  ({ id, isDone }: todo) => {
    const router = useRouter();

    const handleDone =async () => {
        const updateStatus = !isDone;

   

        try {
            const res = await fetch(`http://localhost:3000/api/todo/`+ id, {
                method: 'PUT',
                body: JSON.stringify(updateStatus)
            })
            await res.json()
            router.refresh()



        } catch (error) {

            console.error(error)

        }

    }

    return (
        <>
            <button onClick={handleDone} className="btn btn-ghost btn-xs bg-slate-700 hover:bg-gray-900">{isDone ? 'UnDone' : 'Done'}</button>
        </>
    )
}

export default TodoDone