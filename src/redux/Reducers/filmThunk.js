import { http } from "../../api/config";
import {
  fetchFilmsSuccess,
  fetchFilmsFailure,
  addFilm,
  updateFilmSuccess,
  deleteFilmSuccess,
  setFilms,
} from "./filmSlice";

export const fetchFilms = (page) => async (dispatch) => {
  try {
    const response = await http.get(
      `QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=${page}&soPhanTuTrenTrang=10`
    );
    dispatch(fetchFilmsSuccess(response.data.content));
  } catch (error) {
    dispatch(fetchFilmsFailure(error.toString()));
  }
};

export const searchFilms =
  ({ keyword, page }) =>
  async (dispatch) => {
    try {
      const response = await http.get(
        `QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&tenPhim=${keyword}&soTrang=${page}&soPhanTuTrenTrang=10`
      );
      dispatch(setFilms(response.data.content.items));
    } catch (error) {
      dispatch(fetchFilmsFailure(error.toString()));
    }
  };

export const createFilm = (filmInfo) => async (dispatch) => {
  try {
    const response = await http.post("QuanLyPhim/ThemPhimUploadHinh", filmInfo);
    dispatch(addFilm(response.data.content));
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateFilm = (filmInfo) => async (dispatch, getState) => {
  try {
    const response = await http.post("QuanLyPhim/CapNhatPhimUpload", filmInfo);
    const updatedFilm = response.data.content;

    const currentFilms = getState().filmSlice.films;
    const film = currentFilms.find((f) => f.maPhim === updatedFilm.maPhim);
    const mergedFilm = { ...film, ...updatedFilm };

    dispatch(updateFilmSuccess(mergedFilm));
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteFilm = (maPhim) => async (dispatch) => {
  try {
    await http.delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
    dispatch(deleteFilmSuccess(maPhim));
  } catch (error) {
    throw error;
  }
};
