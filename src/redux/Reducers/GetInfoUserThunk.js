// src/features/exampleThunk.js
import { http } from "../../api/config";
import { setInfoUserSuccess, setInfoUserFailure } from "./GetInfoUserSlice";

export const fetchDataUser = () => async (dispatch) => {
  try {
    const response = await http.post(`QuanLyNguoiDung/ThongTinTaiKhoan`);
    const dataFromAPI = response.data.content.thongTinDatVe;
    dispatch(setInfoUserSuccess(dataFromAPI));
  } catch (error) {
    dispatch(setInfoUserFailure(error.toString()));
  }
};
