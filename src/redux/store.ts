import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/authSlice";
import sidebarSlice from './features/sidebarSlice';
import drawerReducer from './features/drawerSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarSlice,
    drawer: drawerReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch