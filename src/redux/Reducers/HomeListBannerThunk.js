// src/features/exampleThunk.js
import { http } from "../../api/config";
import { fetchDataBannerSuccess, fetchDataBannerFailure } from "./HomeListBannerSlice";

export const fetchDataBanner = () => async (dispatch) => {
  try {
    const response = await http.get(`QuanLyPhim/LayDanhSachBanner`);
    dispatch(fetchDataBannerSuccess(response.data.content));
  } catch (error) {
    dispatch(fetchDataBannerFailure(error.toString()));
  }
};
