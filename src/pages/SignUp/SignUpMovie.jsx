import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { http } from "../../api/config";

export default function SignUpMovie() {
  const navigate = useNavigate();
  let userInfo = useRef({});
  const dispatch = useDispatch();
  let handleChangeRef = (e) => {
    let { name, value } = e.target;
    userInfo.current = { ...userInfo.current, [name]: value };
    console.log(userInfo.current);
  };

  let handleSignUp = (e) => {
    e.preventDefault();
    http
      .post("QuanLyNguoiDung/DangKy", userInfo.current)
      .then((res) => {
        toast.success("Click vào ĐÂY để đăng nhập", {
          onClick: () => navigate("/login"),
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
    <div>
      <section
        className="bg-cover bg-no-repeat bg-[url('https://idulich.vn/wp-content/uploads/2023/07/ma-1621227358.jpg')] bg-stone-700 bg-blend-multiply"
        style={{ height: 650 }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-28 lg:py-36">
          <h2 className="mb-4 font-bold tracking-tight leading-none text-white text-2xl md:text-3xl lg:text-4xl text-center">
            SIGN UP
          </h2>
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
                Đăng ký
              </button>
            </div>
            <div className="mt-4 text-center">
              <span className="text-stone-400">Bạn đã có tài khoản? </span>
              <span className="text-stone-200 hover:text-white">
                <Link to="/login">Đăng nhập ngay</Link>
              </span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
