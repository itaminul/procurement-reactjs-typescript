// drawerSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;
export const selectIsDrawerOpen = (state: { drawer: DrawerState }) =>
  state.drawer.isOpen;

export default drawerSlice.reducer;
