// src/features/exampleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const ManageStateLoginSlice = createSlice({
  name: "ManageStateLoginSlice",
  initialState: {
    isLogin: false,
    isAdmin: false,
  },
  reducers: {
    setStateLogin: (state) => {
      state.isLogin = true;
    },
    setStateLogout: (state) => {
      state.isLogin = false;
    },
    setIsAdmin: (state) => {
      state.isAdmin = true;
    },
    setIsnotAdmin: (state) => {
      state.isAdmin = false;
    },
  },
});

export const { setStateLogin, setStateLogout, setIsAdmin, setIsnotAdmin } =
  ManageStateLoginSlice.actions;
export default ManageStateLoginSlice.reducer;
