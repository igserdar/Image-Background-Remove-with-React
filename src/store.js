import { configureStore } from '@reduxjs/toolkit';
import statusReducer from './features/removeBackground';

export const store = configureStore({
  reducer: {
    status: statusReducer
  },
});
