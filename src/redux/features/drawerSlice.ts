// drawerSlice.ts

import { createSlice } from "@reduxjs/toolkit";

interface DrawerState {
  isOpen: boolean;
}

const initialState: DrawerState = {
  isOpen: false,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isOpen = true;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
    },
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openDrawer, closeDrawer, toggleDrawer } = drawerSlice.actions;
// export const selectIsDrawerOpen = (state: { drawer: DrawerState }) =>
  // state.drawer.isOpen;

export default drawerSlice.reducer;
