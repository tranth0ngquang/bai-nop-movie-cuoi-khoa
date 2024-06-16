import { http } from "../../api/config";
import {
  fetchInfoLichChieuPhimSuccess,
  fetchInfoLichChieuPhimFailure,
  setRapChieu,
} from "./InfoLichChieuPhimSlice";

export const fetchInfoLichChieuPhim = (idSelectedFilm) => async (dispatch) => {
  try {
    const response = await http.get(
      `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idSelectedFilm}`
    );
    let dataFromAPI = response.data.content;
    dispatch(fetchInfoLichChieuPhimSuccess(dataFromAPI));
    dispatch(setRapChieu(dataFromAPI.heThongRapChieu));
  } catch (error) {
    dispatch(fetchInfoLichChieuPhimFailure(error.toString()));
  }
};
