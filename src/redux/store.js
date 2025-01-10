// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import forgotReducer from './forgotSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    forgot: forgotReducer,
  },
});
