import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  code: ''
};

const forgotSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setCode: (state, action) => {
      state.code = action.payload;
    },
  },
});

export const { setToken, setCode } = forgotSlice.actions;
export default forgotSlice.reducer;
