import { http } from "../../api/config";
import {
  fetchUsersSuccess,
  fetchUsersFailure,
  addUser,
  updateUserSuccess,
  deleteUserSuccess,
  setUsers,
} from "./userSlice";

export const fetchUsers = (page) => async (dispatch) => {
  try {
    const response = await http.get(
      `QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=10`
    );
    dispatch(fetchUsersSuccess(response.data.content));
  } catch (error) {
    dispatch(fetchUsersFailure(error.toString()));
  }
};

export const searchUsers =
  ({ keyword, page }) =>
  async (dispatch) => {
    try {
      const response = await http.get(
        `QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${keyword}&soTrang=${page}&soPhanTuTrenTrang=10`
      );
      dispatch(setUsers(response.data.content.items));
    } catch (error) {
      dispatch(fetchUsersFailure(error.toString()));
    }
  };

export const createUser = (userInfo) => async (dispatch) => {
  try {
    const response = await http.post("QuanLyNguoiDung/ThemNguoiDung", userInfo);
    dispatch(addUser(response.data.content));
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateUser = (userInfo) => async (dispatch, getState) => {
  try {
    const response = await http.post(
      "QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      userInfo
    );
    const updatedUser = response.data.content;

    // Merge dữ liệu mới với dữ liệu cũ để đảm bảo không bị mất thông tin
    const currentUsers = getState().userSlice.users;
    const user = currentUsers.find((u) => u.taiKhoan === updatedUser.taiKhoan);
    const mergedUser = { ...user, ...updatedUser };

    dispatch(updateUserSuccess(mergedUser));
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = (taiKhoan) => async (dispatch) => {
  try {
    await http.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
    dispatch(deleteUserSuccess(taiKhoan));
  } catch (error) {
    throw error;
  }
};
