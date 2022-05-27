import { configureStore } from '@reduxjs/toolkit';
import UserSliceReducer from '../redux/userSlice';

const store = configureStore({
  reducer: {
    UserSlice: UserSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
