import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    currentPage: 1,
    totalPages: 1,
    error: null,
  },
  reducers: {
    fetchUsersSuccess: (state, action) => {
      state.users = action.payload.items;
      state.totalPages = action.payload.totalPages;
    },
    fetchUsersFailure: (state, action) => {
      state.error = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUserSuccess: (state, action) => {
      const updatedUser = action.payload;
      const index = state.users.findIndex(
        (user) => user.taiKhoan === updatedUser.taiKhoan
      );
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    },
    deleteUserSuccess: (state, action) => {
      state.users = state.users.filter(
        (user) => user.taiKhoan !== action.payload
      );
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const {
  fetchUsersSuccess,
  fetchUsersFailure,
  addUser,
  updateUserSuccess,
  deleteUserSuccess,
  setCurrentPage,
  setUsers,
} = userSlice.actions;
export default userSlice.reducer;
