import { createSlice } from "@reduxjs/toolkit";

const InfoSelectedFilmSlice = createSlice({
  name: "InfoSelectedFilmSlice",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    fetchDataSelectedFilmSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null; // Clear previous errors
    },
    fetchDataSelectedFilmFailure: (state, action) => {
      state.data = null; // Clear previous data
      state.error = action.payload;
    },
  },
});

export const { fetchDataSelectedFilmSuccess, fetchDataSelectedFilmFailure } =
  InfoSelectedFilmSlice.actions;
export default InfoSelectedFilmSlice.reducer;
