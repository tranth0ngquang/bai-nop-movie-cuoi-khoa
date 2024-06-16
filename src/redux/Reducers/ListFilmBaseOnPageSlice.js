// src/features/exampleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const ListFilmBaseOnPageSlice = createSlice({
  name: "ListFilmBaseOnPage",
  initialState: {
    data: null,
    error: null,
    soTrang: 1,
  },
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.error = action.payload;
    },
    nextPage: (state) => {
      state.soTrang += 1;
    },
    prevPage: (state) => {
      if (state.soTrang > 1) {
        state.soTrang -= 1;
      }
    },
  },
});

export const { fetchDataSuccess, fetchDataFailure, nextPage, prevPage } =
  ListFilmBaseOnPageSlice.actions;
export default ListFilmBaseOnPageSlice.reducer;
