// src/store/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import ListFilmBaseOnPageSlice from "../Reducers/ListFilmBaseOnPageSlice";
import HomeListBannerSlice from "../Reducers/HomeListBannerSlice";
import InfoSelectedFilmSlice from "../Reducers/InfoSelectedFilmSlice";
import InfoLichChieuPhimSlice from "../Reducers/InfoLichChieuPhimSlice";
import DataDanhSachPhongVeSlice from "../Reducers/DataDanhSachPhongVeSlice";
import TicketBookingInfoSlice from "../Reducers/TicketBookingInfoSlice";
import PostThongTinDatVeSlice from "../Reducers/PostThongTinDatVeSlice";
import GetInfoUserSlice from "../Reducers/GetInfoUserSlice";
import ManageStateLoginSlice from "../Reducers/ManageStateLoginSlice";
import userSlice from "../Reducers/userSlice";
import filmSlice from "../Reducers/filmSlice";

const rootReducer = combineReducers({
  ListFilmBaseOnPageSlice,
  HomeListBannerSlice,
  InfoSelectedFilmSlice,
  InfoLichChieuPhimSlice,
  DataDanhSachPhongVeSlice,
  TicketBookingInfoSlice,
  PostThongTinDatVeSlice,
  GetInfoUserSlice,
  ManageStateLoginSlice,
  userSlice,
  filmSlice,
});

export default rootReducer;
