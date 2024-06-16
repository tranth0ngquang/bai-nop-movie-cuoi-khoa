// src/features/exampleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const HomeListBannerSlice = createSlice({
  name: "HomeListBannerSlice",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    fetchDataBannerSuccess: (state, action) => {
      state.data = action.payload;
    },
    fetchDataBannerFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { fetchDataBannerSuccess, fetchDataBannerFailure } =
  HomeListBannerSlice.actions;
export default HomeListBannerSlice.reducer;
