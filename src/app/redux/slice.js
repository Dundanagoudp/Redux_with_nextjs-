import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
        console.log("action", action);      
       const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
    },
    removeUser: (state, action) => {
        console.log("action", action);
      state.users = state.users.filter(user => user.id !== action.payload);
    }
    
  }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;