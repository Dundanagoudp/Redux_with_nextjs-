import { configureStore } from '@reduxjs/toolkit';
import userReducers from './slice';
import todoReducers from './todoSlice';


export const store = configureStore({
  reducer :{
    usersData : userReducers,
    todosData : todoReducers,
  }
});