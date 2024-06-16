import { createSlice } from "@reduxjs/toolkit";

const InfoLichChieuPhimSlice = createSlice({
  name: "InfoLichChieuPhimSlice",
  initialState: {
    data: null,
    error: null,
    rapChieu: null,
    selectedRapChieu: null,
    selectedTime: null,
  },
  reducers: {
    fetchInfoLichChieuPhimSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null; // Clear previous errors
    },
    fetchInfoLichChieuPhimFailure: (state, action) => {
      state.data = null; // Clear previous data
      state.error = action.payload;
    },
    setRapChieu: (state, action) => {
      state.rapChieu = action.payload;
    },
  },
});

export const {
  fetchInfoLichChieuPhimSuccess,
  fetchInfoLichChieuPhimFailure,
  setRapChieu,
  setSelectedRapChieu,
  setSelectedTime,
} = InfoLichChieuPhimSlice.actions;
export default InfoLichChieuPhimSlice.reducer;
