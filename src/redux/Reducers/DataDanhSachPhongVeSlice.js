import { createSlice } from "@reduxjs/toolkit";

const DataDanhSachPhongVeSlice = createSlice({
  name: "DataDanhSachPhongVeSlice",
  initialState: {
    data: null,
    error: null,
    maLichChieu: null,
  },
  reducers: {
    setDataPhongVeSuccess: (state, action) => {
      state.data = action.payload;
    },
    setDataPhongVeFailure: (state, action) => {
      state.error = action.payload;
    },
    setMaLichChieu: (state, action) => {
      state.maLichChieu = action.payload;
    },
  },
});

export const { setDataPhongVeSuccess, setDataPhongVeFailure, setMaLichChieu } =
  DataDanhSachPhongVeSlice.actions;
export default DataDanhSachPhongVeSlice.reducer;
