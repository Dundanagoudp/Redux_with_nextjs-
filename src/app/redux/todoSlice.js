import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [],
}

const Slice = createSlice({
    name : 'todos',
    initialState,
    reducer :{
        addTodos:(state, action) => {
            const newTodo = {
                id: nanoid(),
                name: action.payload,
            };
            state.todos.push(newTodo);
        },
        removeTodos: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    }
})

export const { addTodos, removeTodos } = Slice.actions;
export default Slice.reducer;