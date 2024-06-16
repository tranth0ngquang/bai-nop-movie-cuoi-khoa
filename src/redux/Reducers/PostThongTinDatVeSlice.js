// src/features/exampleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const PostThongTinDatVeSlice = createSlice({
  name: "PostThongTinDatVeSlice",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    postDataSuccess: (state, action) => {
      state.data = action.payload;
    },
    postDataFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { postDataSuccess, postDataFailure } =
  PostThongTinDatVeSlice.actions;
export default PostThongTinDatVeSlice.reducer;
