import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    loading: false,
    error: null,
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            console.log("action", action);
            
            const newTodo = {
                id: nanoid(),
                name: action.payload,
            };
            state.todos.push(newTodo);
            localStorage.setItem("todos", JSON.stringify(state.todos));
            console.log("state.todos", state.todos);
        },
        removeTodos: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
    }
});

export const { addTodos, removeTodos } = todoSlice.actions;
export default todoSlice.reducer;