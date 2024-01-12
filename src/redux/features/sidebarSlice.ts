import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface SidebarState {
  isSidebarOpen: boolean;
}

const initialState: SidebarState = {
  isSidebarOpen: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    }
  }
})
export const { toggleSidebar } = sidebarSlice.actions;
export const seletIsSidebarOpen = (state: RootState) => state.sidebar.isSidebarOpen;
export default sidebarSlice.reducer;