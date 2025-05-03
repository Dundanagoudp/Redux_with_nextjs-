import { createSlice, nanoid } from '@reduxjs/toolkit';

// Load users from localStorage if available, otherwise start empty
const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Add a new user
    addUser: (state, action) => {
      const newUser = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(newUser);
      // Update localStorage with the new list
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    // Remove a user (correctly updates localStorage)
    removeUser: (state, action) => {
      // Filter out the user with matching ID
      state.users = state.users.filter(user => user.id !== action.payload);
      // Update localStorage with the remaining users
      localStorage.setItem("users", JSON.stringify(state.users));
    }
  }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;