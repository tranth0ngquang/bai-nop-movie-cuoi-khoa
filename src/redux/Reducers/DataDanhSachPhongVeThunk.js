// src/features/exampleThunk.js
import { http } from "../../api/config";
import {
  setDataPhongVeSuccess,
  setDataPhongVeFailure,
} from "./DataDanhSachPhongVeSlice";

export const fetchDataDanhSachPhongVe = (maLichChieu) => async (dispatch) => {
  try {
    const response = await http.get(
      `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
    dispatch(setDataPhongVeSuccess(response.data.content));
  } catch (error) {
    dispatch(setDataPhongVeFailure(error.toString()));
  }
};
