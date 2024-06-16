import React, { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchDataUser } from "../../redux/Reducers/GetInfoUserThunk";
import { http } from "../../api/config";

export default function QuanTriKHMovie() {
  const navigate = useNavigate();
  const imgCardMovie = useSelector((state) => state.GetInfoUserSlice.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataUser());
  }, [dispatch]);

  let renderCardMoiveDaDat = () => {
    let objMang =
      imgCardMovie &&
      imgCardMovie.map((item, index) => {
        let isoString = item.ngayDat;
        let formattedDate = format(new Date(isoString), "dd/MM/yyyy | HH:mm");
        let renderViTriGhe = () => {
          let objGhe = item.danhSachGhe.map((item, index) => {
            return `${item.tenGhe} `;
          });
          return objGhe;
        };

        return (
          <div className="" key={item.maVe}>
            <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl bg-stone-900 border-stone-700 hover:bg-black">
              <img
                className="object-cover rounded-t-lg h-60 md:h-auto w-full md:w-48 md:rounded-none md:rounded-s-lg"
                src={item.hinhAnh}
                alt="anhphim"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <p className="text-stone-400 cardMovie_block">
                  Ngày đặt: {formattedDate}
                </p>
                <h5 className="font-bold text-white text-2xl">
                  Tên phim: {item.tenPhim}
                </h5>
                <p className="text-stone-400 text-sm">Hành động | 18+</p>
                <p className="mb-2 text-stone-400 text-sm">
                  Thời lượng: {item.thoiLuongPhim} phút
                </p>
                <p className="text-stone-400 text-sm">
                  Chi nhánh: {item.danhSachGhe[0].tenHeThongRap} |
                  {item.danhSachGhe[0].tenCumRap} | ghế số: {renderViTriGhe()}
                </p>
                <p className="text-stone-400 text-sm">
                  Giá vé: {item.giaVe * item.danhSachGhe.length}
                </p>
              </div>
            </div>
          </div>
        );
      });
    return objMang;
  };

  let userChangeInfo = useRef({});
  let handleChangeRef = (e) => {
    let { name, value } = e.target;
    userChangeInfo.current = { ...userChangeInfo.current, [name]: value };
    console.log(userChangeInfo.current);
  };

  let handleSignUp = (e) => {
    e.preventDefault();
    http
      .put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", userChangeInfo.current)
      .then((res) => {
        console.log(res.data);
        toast.success("Cập nhật thành công", {
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
        toast.error("Cập nhật thất bại, sai tài khoản hoặc mật khẩu", {
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
      <section className="bg-cover bg-no-repeat bg-[url('https://i.pinimg.com/564x/46/67/b5/4667b5f64382e76cf154c0fd79ff5a42.jpg')] bg-stone-700 bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl px-4 py-28 lg:py-36">
          <h2 className="mb-2 font-bold tracking-tight leading-none text-white text-2xl md:text-3xl lg:text-4xl text-center">
            Cài đặt tài khoản
          </h2>
          <p className="mb-4 text-stone-400 text-center">
            Thông tin có thể được thay đổi
          </p>
          <form onSubmit={handleSignUp} className="max-w-md mx-auto">
            {/* id */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChangeRef}
                type="text"
                name="taiKhoan"
                id="taiKhoanChange"
                className="peer loginMovie_input"
                placeholder=" "
                required
              />
              <label htmlFor="taiKhoanChange" className="loginMovie_label">
                Tên tài khoản
              </label>
            </div>

            {/* pass */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChangeRef}
                type="password"
                name="matKhau"
                id="matKhauChange"
                className="peer loginMovie_input"
                placeholder=" "
                required
              />
              <label htmlFor="matKhauChange" className="loginMovie_label">
                Password
              </label>
            </div>

            {/* email */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChangeRef}
                type="text"
                name="email"
                id="emailChange"
                className="peer loginMovie_input"
                placeholder=" "
                required
              />
              <label htmlFor="emailChange" className="loginMovie_label">
                Email
              </label>
            </div>

            {/* sdt */}

            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChangeRef}
                type="text"
                name="soDt"
                id="soDtChange"
                className="peer loginMovie_input"
                placeholder=" "
                required
              />
              <label htmlFor="soDtChange" className="loginMovie_label">
                Số điện thoại
              </label>
            </div>

            {/* maNhom */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChangeRef}
                type="text"
                name="maNhom"
                id="maNhomChange"
                className="peer loginMovie_input"
                placeholder=" "
                required
              />
              <label htmlFor="maNhomChange" className="loginMovie_label">
                Mã nhóm
              </label>
            </div>

            {/* hoten */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChangeRef}
                type="text"
                name="hoTen"
                id="hoTenChange"
                className="peer loginMovie_input"
                placeholder=" "
                required
              />
              <label htmlFor="hoTenChange" className="loginMovie_label">
                Họ và tên
              </label>
            </div>

            {/* maloainguoidung */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChangeRef}
                type="text"
                name="maLoaiNguoiDung"
                id="maLoaiNguoiDungChange"
                className="peer loginMovie_input"
                placeholder=""
                required
              />
              <label
                htmlFor="maLoaiNguoiDungChange"
                className="loginMovie_label rtl:peer-focus:left-auto"
              >
                Mã loại người dùng (QuanTri / KhachHang)
              </label>
            </div>
            <div className="my-4 text-center">
              <button type="submit" className="btn_den text-xl">
                Cập nhật
              </button>
            </div>
          </form>

          {/* lịch sử đã đặt */}
          <h2 className="mt-2 font-bold tracking-tight leading-none text-white text-xl md:text-2xl lg:text-3xl text-center">
            Lịch sử đã đặt
          </h2>
          <div className="mx-auto w-full max-w-screen-xl p-4 pt-8 pb-8 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-6">
            {renderCardMoiveDaDat()}
          </div>
        </div>
      </section>
    </div>
  );
}
