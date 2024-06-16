import { http } from "../../api/config";
import { fetchDataSuccess, fetchDataFailure } from "./ListFilmBaseOnPageSlice";

export const fetchData = (soTrang) => async (dispatch) => {
  try {
    const response = await http.get(
      `QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=${soTrang}&soPhanTuTrenTrang=10`
    );
    dispatch(fetchDataSuccess(response.data.content.items));
  } catch (error) {
    dispatch(fetchDataFailure(error.toString()));
  }
};
