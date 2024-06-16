
"use client";

import { Button, Modal } from "flowbite-react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
// import { createUser, fetchUsers } from "../../features/userThunk";
import { createUser, fetchUsers } from "../../redux/Reducers/userThunk";
import { Bounce, toast } from "react-toastify";

export default function ModalThemNguoiDung() {
  const [openModal, setOpenModal] = useState(false);
  let userInfo = useRef({});
  const dispatch = useDispatch();

  let handleChangeRef = (e) => {
    let { name, value } = e.target;
    userInfo.current = { ...userInfo.current, [name]: value };
    console.log(userInfo.current);
  };

  let handleSignUp = (e) => {
    e.preventDefault();
    dispatch(createUser(userInfo.current))
      .then((res) => {
        toast.success("Thêm thành công", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setOpenModal(false);
        dispatch(fetchUsers(1)); // Refresh the user list to get the latest data
      })
      .catch((err) => {
        toast.error("Đăng ký thất bại", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="flex justify-end ">
      <Button onClick={() => setOpenModal(true)}>Thêm người dùng</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Thêm người dùng</Modal.Header>
        <Modal.Body className="bg-cyan-900">
          <form onSubmit={handleSignUp} className="max-w-md mx-auto">
            {/* Tài khoản */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                name="taiKhoan"
                onChange={handleChangeRef}
                type="text"
                id="taiKhoan"
                className="peer loginMovie_input"
                placeholder=" "
                required
              />
              <label htmlFor="taiKhoan" className="loginMovie_label">
                Tên tài khoản
              </label>
            </div>
            {/* Mật khẩu */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChangeRef}
                name="matKhau"
                type="password"
                id="matKhau"
                className="peer loginMovie_input"
                placeholder=" "
                required
              />
              <label htmlFor="matKhau" className="loginMovie_label">
                Password
              </label>
            </div>
            {/* Email */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChangeRef}
                type="text"
                name="email"
                id="email"
                className="peer loginMovie_input"
                placeholder=" "
                required
              />
              <label htmlFor="email" className="loginMovie_label">
                Email
              </label>
            </div>
            {/* Số điện thoại */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChangeRef}
                type="text"
                name="soDt"
                id="soDt"
                className="peer loginMovie_input"
                placeholder=" "
                required
              />
              <label htmlFor="soDt" className="loginMovie_label">
                Số điện thoại
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChangeRef}
                type="text"
                name="maLoaiNguoiDung"
                id="maLoaiNguoiDung"
                className="peer loginMovie_input"
                placeholder=" "
                required
              />
              <label htmlFor="maLoaiNguoiDung" className="loginMovie_label">
                Mã loại người dùng
              </label>
            </div>
            {/* Họ và tên, mã nhóm */}
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={handleChangeRef}
                  type="text"
                  name="hoTen"
                  id="hoTen"
                  className="peer loginMovie_input"
                  placeholder=" "
                  required
                />
                <label htmlFor="hoTen" className="loginMovie_label">
                  Họ và tên
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={handleChangeRef}
                  type="text"
                  name="maNhom"
                  id="maNhom"
                  className="peer loginMovie_input"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="maNhom"
                  className="loginMovie_label rtl:peer-focus:left-auto"
                >
                  Mã nhóm
                </label>
              </div>
            </div>

            <div className="mt-4 text-center">
              <button type="submit" className="btn_den text-xl">
                Thêm
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
