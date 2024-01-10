// src/features/authSlice.ts

import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: JSON.parse(
    localStorage.getItem("isAuthenticated") || "false"
  ),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
        localStorage.setItem("isAuthenticated", "true");
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", "false");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
