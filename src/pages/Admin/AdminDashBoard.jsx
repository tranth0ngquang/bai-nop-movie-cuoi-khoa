"use client";

import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import LogoZahaSvg from "../../assets/LogoZahaSvg";
import { Fragment, useState } from "react";
import ManageUser from "./ManageUser";
import ModalThemNguoiDung from "./ModalThemNguoiDung";
import ManageFilm from "./ManageFilm";
import ModalThemPhim from "./ModalThemFilm";

export default function AdminDashBoard() {
  const [activeTab, setActiveTab] = useState("userManagement");
  const infoUser = JSON.parse(localStorage.getItem("userContent"));

  const renderContent = () => {
    switch (activeTab) {
      case "userManagement":
        return (
          <Fragment>
            <ModalThemNguoiDung />
            <ManageUser />;
          </Fragment>
        );

      case "movieManagement":
        return (
          <Fragment>
            <ModalThemPhim />
            <ManageFilm />;
          </Fragment>
        );
      case "logout":
        return <div>Đăng xuất</div>;
      default:
        return <div>Chọn một mục từ sidebar</div>;
    }
  };

  return (
    <Fragment>
      <Navbar fluid rounded className="bg-zinc-600">
        <NavLink to="/">
          <LogoZahaSvg />
        </NavLink>
      </Navbar>

      <div className="flex min-h-screen bg-gray-100">
        <div className="w-64 bg-white shadow-md">
          <div className="p-4">
            <img
              className="w-16 h-16 rounded-full mx-auto"
              src="https://i.pinimg.com/564x/11/a9/6b/11a96b281ad9538af72046bb7a879e87.jpg"
              alt="User"
            />
            <div className="text-center mt-2">
              <h4 className="text-lg font-semibold">{infoUser.hoTen}</h4>
              <p className="text-sm text-gray-600">{infoUser.email}</p>
            </div>
          </div>
          <nav className="mt-4">
            <ul>
              <li>
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-gray-200 ${
                    activeTab === "userManagement" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setActiveTab("userManagement")}
                >
                  Quản lí người dùng
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-gray-200 ${
                    activeTab === "movieManagement" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setActiveTab("movieManagement")}
                >
                  Quản lí phim
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-gray-200 ${
                    activeTab === "logout" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setActiveTab("logout")}
                >
                  Đăng xuất
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 p-6">{renderContent()}</div>
      </div>
    </Fragment>
  );
}
