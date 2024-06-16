// src/features/exampleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const GetInfoUserSlice = createSlice({
  name: "GetInfoUserSlice",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    setInfoUserSuccess: (state, action) => {
      state.data = action.payload;
    },
    setInfoUserFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setInfoUserSuccess, setInfoUserFailure } =
  GetInfoUserSlice.actions;
export default GetInfoUserSlice.reducer;
