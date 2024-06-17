import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsAdmin,
  setStateLogin,
} from "../../redux/Reducers/ManageStateLoginSlice";
import { http } from "../../api/config";

export default function LoginMovie() {
  const navigate = useNavigate();
  let userLogin = useRef({});
  const dispatch = useDispatch();

  let handleChangeRef = (e) => {
    let { name, value } = e.target;
    userLogin.current = { ...userLogin.current, [name]: value };
  };

  const handleLogin = (userData) => {
    dispatch(setStateLogin());
    if (userData.maLoaiNguoiDung === "QuanTri") {
      dispatch(setIsAdmin());
    }
    localStorage.setItem("userContent", JSON.stringify(userData));
    navigate("/");
  };

  let handleCheckLogin = (e) => {
    e.preventDefault();
    http
      .post("QuanLyNguoiDung/DangNhap", userLogin.current)
      .then((res) => {
        console.log(res);
        const userData = res.data.content;
        handleLogin(userData);
      })
      .catch((err) => {
        toast.error("Đăng nhập thất bại - Sai tài khoản hoặc mật khẩu", {
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
            LOGIN
          </h2>
          <form onSubmit={handleCheckLogin} className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChangeRef}
                type="text"
                name="taiKhoan"
                id="taiKhoanDangNhap"
                className="peer loginMovie_input"
                placeholder=" "
                required
              />
              <label htmlFor="taiKhoanDangNhap" className="loginMovie_label">
                Tên tài khoản
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChangeRef}
                type="password"
                name="matKhau"
                id="matKhauDangNhap"
                className="peer loginMovie_input"
                placeholder=" "
                required
              />
              <label htmlFor="matKhauDangNhap" className="loginMovie_label">
                Password
              </label>
            </div>

            <div className="mt-16 text-center">
              <button type="submit" className="btn_den text-xl">
                Đăng nhập
              </button>
            </div>
            <div className="mt-4 text-center">
              <span className="text-stone-400">Bạn chưa có tài khoản? </span>
              <span className="text-stone-200 hover:text-white">
                <Link to="/signup">Đăng ký ngay</Link>
              </span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
