import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './headerSlice';

const store = configureStore({
  reducer: {
    header: headerSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
