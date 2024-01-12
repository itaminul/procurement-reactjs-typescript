import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/authSlice";
import sidebarSlice from './features/sidebarSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarSlice
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch