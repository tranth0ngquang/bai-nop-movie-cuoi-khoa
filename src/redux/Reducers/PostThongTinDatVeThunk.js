import { http } from "../../api/config";
import { postDataSuccess, postDataFailure } from "./PostThongTinDatVeSlice";

export const postDataDatVe = (data) => async (dispatch) => {
  try {
    const response = await http.post(`QuanLyDatVe/DatVe`, data);
    console.log(response.data);
    const dataFromAPI = response.data;
    dispatch(postDataSuccess(dataFromAPI));
  } catch (error) {
    dispatch(postDataFailure(error.toString()));
  }
};
