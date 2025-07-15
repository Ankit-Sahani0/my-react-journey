import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">My Todos</h2>
                <p className="text-gray-600">
                    {todos.length === 0 
                        ? "No todos yet. Add some tasks to get started!" 
                        : `${todos.length} ${todos.length === 1 ? 'task' : 'tasks'} remaining`
                    }
                </p>
            </div>
            
            {todos.length === 0 ? (
                <div className="text-center py-12">
                    <div className="text-gray-400 text-6xl mb-4">📝</div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No todos yet</h3>
                    <p className="text-gray-500">Add your first todo to get started!</p>
                </div>
            ) : (
                <ul className="space-y-3">
                    {todos.map((todo) => (
                        <li
                            className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-300"
                            key={todo.id}
                        >
                            <div className="flex items-center justify-between p-4">
                                <div className="flex items-center space-x-3 flex-1">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full opacity-70"></div>
                                    <span className="text-gray-800 font-medium text-lg">
                                        {todo.text}
                                    </span>
                                </div>
                                
                                <button
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                    className="ml-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                                    title="Delete todo"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Todos