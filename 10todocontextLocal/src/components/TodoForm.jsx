import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")

    // addTodo ki jarurat hai yaha par isliye ham usko useTodo hook se le rhe hai jo ki useContext se aa rha hai
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return
// yaha par addTodo me directly todo pass nhi kr sakte kyuki addTodo ek object expect kr raha hai or ye object addTodo() me spread hogi
        addTodo({ todo, completed: false })
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;