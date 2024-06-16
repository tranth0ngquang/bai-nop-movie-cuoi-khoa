import { http } from "../../api/config";
import {
  fetchDataSelectedFilmSuccess,
  fetchDataSelectedFilmFailure,
} from "./InfoSelectedFilmSlice";

export const fetchDataSelectedFilm = (idSelectedFilm) => async (dispatch) => {
  try {
    const response = await http.get(
      `QuanLyPhim/LayThongTinPhim?MaPhim=${idSelectedFilm}`
    );
    let dataFromAPI = response.data.content;
    dispatch(fetchDataSelectedFilmSuccess(dataFromAPI));
  } catch (error) {
    dispatch(fetchDataSelectedFilmFailure(error.toString()));
  }
};
