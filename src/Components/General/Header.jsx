"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import LogoZahaSvg from "../../assets/LogoZahaSvg";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  setStateLogin,
  setStateLogout,
  setIsAdmin,
  setIsnotAdmin,
} from "../../redux/Reducers/ManageStateLoginSlice";

export default function Header() {
  const { isLogin } = useSelector((state) => state.ManageStateLoginSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const infoUser = JSON.parse(localStorage.getItem("userContent"));
  const isAdmin = useSelector((state) => state.ManageStateLoginSlice.isAdmin);
  useEffect(() => {
    // Kiểm tra localStorage khi component mount
    const persistedLogin = JSON.parse(localStorage.getItem("userContent"));
    if (persistedLogin) {
      dispatch(setStateLogin());
      if (persistedLogin.maLoaiNguoiDung === "QuanTri") {
        dispatch(setIsAdmin());
      }
    }
  }, [dispatch]);

  console.log("is admin", isAdmin);

  useEffect(() => {
    // Cuộn đến phần tử nếu URL chứa hash
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleLogout = () => {
    dispatch(setStateLogout());
    dispatch(setIsnotAdmin());
    localStorage.removeItem("userContent");
  };

  return (
    <Navbar fluid rounded className="bg-black/90 dark:bg-black/90 text-stone-500 px-2 py-2.5 dark:border-gray-700 sm:px-4 rounded-none rounded-b-lg fixed z-50 w-full">
      <NavLink to="/">
        <LogoZahaSvg />
      </NavLink>

      <div className="flex md:order-2">
        {isLogin ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://i.pinimg.com/564x/11/a9/6b/11a96b281ad9538af72046bb7a879e87.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{infoUser.hoTen}</span>
              <span className="block truncate text-sm font-medium">
                {infoUser.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={() => navigate("/infoKhachHang")}>
              Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Button.Group>
            <Button className="border border-transparent bg-stone-900 dark:bg-stone-900 text-white focus:ring-stone-300 dark:focus:ring-stone-300 enabled:hover:bg-stone-700 dark:enabled:hover:bg-stone-700 focus:ring-1" onClick={() => navigate("/signup")}>
              Đăng ký
            </Button>
            <Button className="border border-transparent bg-stone-900 dark:bg-stone-900 text-white focus:ring-stone-300 dark:focus:ring-stone-300 enabled:hover:bg-stone-700 dark:enabled:hover:bg-stone-700 focus:ring-1" onClick={() => navigate("/login")}>
              Đăng nhập
            </Button>
          </Button.Group>
        )}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <NavLink to="/home" className="hover:text-white focus:text-white p-2 md:p-0 text-center hover:bg-stone-800 md:hover:bg-transparent">Trang chủ</NavLink>
        <NavLink to="/home#phimDangChieu"  className="hover:text-white focus:text-white p-2 md:p-0 text-center hover:bg-stone-800 md:hover:bg-transparent">Lịch chiếu</NavLink>
        <NavLink to="/home#phimSapChieu" className="hover:text-white focus:text-white p-2 md:p-0 text-center hover:bg-stone-800 md:hover:bg-transparent">Phim sắp chiếu</NavLink>
        <NavLink to="/home#tinTuc" className="hover:text-white focus:text-white p-2 md:p-0 text-center hover:bg-stone-800 md:hover:bg-transparent">Tin tức</NavLink>
        {isLogin && isAdmin && <NavLink to="/admin"  className="hover:text-white focus:text-white p-2 md:p-0 text-center hover:bg-stone-800 md:hover:bg-transparent">Quản trị</NavLink>}
      </Navbar.Collapse>
    </Navbar>
  );
}

// // -----------------------
