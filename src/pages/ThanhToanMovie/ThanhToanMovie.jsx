import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postDataDatVe } from "../../redux/Reducers/PostThongTinDatVeThunk";
import { http } from "../../api/config";

export default function ThanhToanMovie() {
  const {
    tenPhim,
    hinhAnh,
    gioDaDatVe,
    ngayDaDatVe,
    ngayPhimDuocChieu,
    gioPhimDuocChieu,
    rap,
    phong,
    danhSachGheDaDat,
    tongTienVe,
  } = useSelector((state) => state.TicketBookingInfoSlice);

  const navigte = useNavigate();
  const dispatch = useDispatch();
  const maLichChieu = useSelector(
    (state) => state.DataDanhSachPhongVeSlice.maLichChieu
  );
  const infoUser = JSON.parse(localStorage.getItem("userContent"));

  const handleThanhToan = () => {
    const data = {
      maLichChieu: maLichChieu,
      danhSachVe: danhSachGheDaDat.map((seat) => ({
        maGhe: seat.maGhe,
        giaVe: seat.giaVe,
      })),
    };
    console.log(data);
    if (!infoUser) {
      navigte("/login");
      return;
    }
    dispatch(postDataDatVe(data));
    navigte("/infoKhachHang");
  };
  return (
    <div>
      <section className="bg-cover bg-no-repeat bg-[url('https://img-assets.drafthouse.com/images/venues/wrigleyville/Alamo-Draft-House-32.jpg?auto=compress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=1080&q=80&w=1920')] bg-stone-700 bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl px-4 py-28 lg:py-36">
          <h2 className="mb-2 font-bold tracking-tight leading-none text-white text-2xl md:text-3xl lg:text-4xl text-center">
            Thông tin đặt vé
          </h2>
          <p className="mb-4 text-stone-400 text-center">
            Khi thanh toán xong không hoàn, hủy vé
          </p>

          <div className="flex flex-col md:flex-row items-center border rounded-lg shadow bg-stone-900/70 border-stone-700 hover:bg-stone-900">
            <img
              className="object-cover rounded-t-lg h-60 md:h-auto w-full md:w-80 md:rounded-none md:rounded-s-lg"
              src={hinhAnh}
              alt=""
            />
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row">
                <div className="flex-grow justify-between p-6 leading-normal basis-1/2">
                  <h5 className="text-stone-400 text-xl">Tên phim:</h5>
                  <h5 className="font-bold text-white text-4xl">{tenPhim}</h5>
                </div>
                <div className="flex-grow justify-between p-6 leading-normal basis-1/2">
                  <p className="text-stone-400">
                    Thể loại: Viễn tưởng, hành động
                  </p>
                  <p className="text-stone-400">Độ tuổi: 16+</p>
                  <p className="text-stone-400">Thời lượng: 120 phút</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="flex-grow justify-between p-6 leading-normal basis-1/2">
                  <p className="text-stone-400 text-sm">Ngày đặt:</p>
                  <p className="text-white mb-4 text-xl">
                    {ngayDaDatVe} | {gioDaDatVe}
                  </p>

                  <p className="text-stone-400 text-sm">Ngày giờ chiếu:</p>
                  <p className="text-white mb-4 text-xl">
                    {ngayPhimDuocChieu} | {gioPhimDuocChieu}
                  </p>

                  <p className="text-stone-400 text-sm">Rạp:</p>
                  <p className="text-white mb-4 text-xl">{rap}</p>

                  <p className="text-stone-400">Phòng:</p>
                  <p className="text-white mb-4 text-xl">{phong}</p>
                </div>

                <div className="flex-grow justify-between p-6 leading-normal basis-1/2">
                  <p className="text-stone-400 text-sm">Ghế số:</p>
                  <p className="text-white mb-4 text-xl">
                    {danhSachGheDaDat.map((ghe, index) => {
                      return (
                        <span key={`Ghế đã đặt: ${index}`}>{ghe.tenGhe} </span>
                      );
                    })}
                  </p>

                  <p className="text-stone-400 text-sm">Giá vé:</p>
                  <p className="text-white mb-4 text-xl">{tongTienVe}</p>

                  <div className="my-4">
                    <button
                      type="button"
                      className="btn_trang text-xl"
                      onClick={() => {
                        handleThanhToan();
                      }}
                    >
                      Thanh toán
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
