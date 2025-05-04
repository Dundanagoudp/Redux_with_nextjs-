import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import { create } from 'domain';

// Load users from localStorage if available, otherwise start empty
const initialState = {
  userAPIData: [],
  users: JSON.parse(localStorage.getItem("users")) || [],
  loading: false,
  error: null,
};

export const fetchApiUsers = createAsyncThunk("users/fetchApiUsers", async () => {
  console.log("Fetching API users...");
  
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
});
 
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiUsers.fulfilled, (state,action) => {
        console.log("API users fetched successfully:", action.payload);
        
        state.loading = false,
        state.userAPIData = action.payload,
        state.error = null;
       
      })
     
  }

});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;