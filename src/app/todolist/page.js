"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodos } from "../redux/todoSlice";

export default function Page() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (todo.trim()) {
            dispatch(addTodos(todo));
            setTodo("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAddTodo();
        }
    };

    const todosData = useSelector((state) => state.todosData.todos);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="p-8">
                    <div className="flex justify-center">
                        <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Todo App
                    </h1>
                    
                    <div className="flex mb-8">
                        <input
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                            onKeyPress={handleKeyPress}
                            type="text"
                            placeholder="What needs to be done?"
                            className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <button
                            onClick={handleAddTodo}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-r-lg transition duration-200"
                        >
                            Add
                        </button>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">
                            Your Todos
                        </h2>
                        {todosData.length === 0 ? (
                            <div className="text-center py-8 bg-gray-50 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 mx-auto text-gray-400 mb-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    />
                                </svg>
                                <p className="text-gray-500">No todos yet. Add one above!</p>
                            </div>
                        ) : (
                            <ul className="divide-y divide-gray-200">
                                {todosData.map((todo) => (
                                    <li key={todo.id} className="py-4 px-3 hover:bg-gray-50 rounded-lg transition duration-150">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-800">{todo.name}</span>
                                            <button
                                                onClick={() => dispatch(removeTodos(todo.id))}
                                                className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition duration-150"
                                                aria-label="Remove todo"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    
                    {todosData.length > 0 && (
                        <div className="mt-6 text-sm text-gray-500 text-center">
                            {todosData.length} {todosData.length === 1 ? "item" : "items"} in list
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}