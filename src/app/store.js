import { configureStore } from '@reduxjs/toolkit';
import loginerReducer from '../features/loginer/loginerSlice';

const store = configureStore({
  reducer: {
    loginer: loginerReducer,
  },
});

export default store;