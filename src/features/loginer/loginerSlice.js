
import { createSlice } from '@reduxjs/toolkit';

export const loginerSlice = createSlice({
  name: 'loginer',
  initialState: {
    value: false,
  },
  reducers: {
    login: (state) => {
      state.value=(true)
    },
    logout: (state) => {
      state.value=(false)
    }
  },
})

export const { login, logout } = loginerSlice.actions;

export const selectLogin = (state) => state.loginer.value;

export default loginerSlice.reducer;