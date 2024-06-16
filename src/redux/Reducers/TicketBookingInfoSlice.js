import { createSlice } from "@reduxjs/toolkit";

const TicketBookingInfoSlice = createSlice({
  name: "TicketBookingInfoSlice",
  initialState: {
    tenPhim: null,
    hinhAnh: null,
    gioDaDatVe: null,
    ngayDaDatVe: null,

    ngayPhimDuocChieu: null,
    gioPhimDuocChieu: null,

    rap: null,
    phong: null,
    danhSachGheDaDat: [],
    tongTienVe: 0,
  },
  reducers: {
    setTenPhimDaDat: (state, action) => {
      state.tenPhim = action.payload;
    },

    setHinhAnhDaDat: (state, action) => {
      state.hinhAnh = action.payload;
    },
    setGioDaDatVe: (state, action) => {
      state.gioDaDatVe = action.payload;
    },
    setNgayDaDatVe: (state, action) => {
      state.ngayDaDatVe = action.payload;
    },
    setNgayPhimDuocChieu: (state, action) => {
      state.ngayPhimDuocChieu = action.payload;
    },
    setGioPhimDuocChieu: (state, action) => {
      state.gioPhimDuocChieu = action.payload;
    },

    setRapDaDat: (state, action) => {
      state.rap = action.payload;
    },

    setPhongDaDat: (state, action) => {
      state.phong = action.payload;
    },

    setDanhSachGheDaDat: (state, action) => {
      state.danhSachGheDaDat = action.payload;
    },

    setTongTienVe: (state, action) => {
      state.tongTienVe = action.payload;
    },
  },
});

export const {
  setTenPhimDaDat,
  setHinhAnhDaDat,
  setGioDaDatVe,
  setNgayDaDatVe,
  setNgayPhimDuocChieu,
  setGioPhimDuocChieu,
  setRapDaDat,
  setPhongDaDat,
  setDanhSachGheDaDat,
  setTongTienVe,
} = TicketBookingInfoSlice.actions;

export default TicketBookingInfoSlice.reducer;
