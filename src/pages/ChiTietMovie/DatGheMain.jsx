import React, { useEffect, useState } from "react";
import DatGheMainManChieuSang from "./DatGheMainManChieuSang";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchDataDanhSachPhongVe } from "../../redux/Reducers/DataDanhSachPhongVeThunk";
import { format } from "date-fns";
import {
  setTenPhimDaDat,
  setGioDaDatVe,
  setNgayDaDatVe,
  setNgayPhimDuocChieu,
  setGioPhimDuocChieu,
  setRapDaDat,
  setPhongDaDat,
  setDanhSachGheDaDat,
  setTongTienVe,
  setHinhAnhDaDat,
} from "../../redux/Reducers/TicketBookingInfoSlice";

export default function DatGheMain() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [danhSachGhe, setDanhSachGhe] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [total, setTotal] = useState(0);

  const maLichChieu = useSelector(
    (state) => state.DataDanhSachPhongVeSlice.maLichChieu
  );
  const dataDanhSachPhongVe = useSelector(
    (state) => state.DataDanhSachPhongVeSlice.data
  );

  // Fetch data when maLichChieu changes
  useEffect(() => {
    if (maLichChieu) {
      dispatch(fetchDataDanhSachPhongVe(maLichChieu));
    }
  }, [maLichChieu, dispatch]);

  // Update danhSachGhe when dataDanhSachPhongVe changes
  useEffect(() => {
    if (dataDanhSachPhongVe) {
      setDanhSachGhe(dataDanhSachPhongVe.danhSachGhe);
      dispatch(setTenPhimDaDat(dataDanhSachPhongVe.thongTinPhim.tenPhim));
      dispatch(
        setNgayPhimDuocChieu(dataDanhSachPhongVe.thongTinPhim.ngayChieu)
      );
      dispatch(setGioPhimDuocChieu(dataDanhSachPhongVe.thongTinPhim.gioChieu));
      dispatch(setRapDaDat(dataDanhSachPhongVe.thongTinPhim.tenCumRap));
      dispatch(setPhongDaDat(dataDanhSachPhongVe.thongTinPhim.tenRap));
      dispatch(setHinhAnhDaDat(dataDanhSachPhongVe.thongTinPhim.hinhAnh));
      console.log(dataDanhSachPhongVe)
    }
  }, [dataDanhSachPhongVe, dispatch]);

  const renderGhe = () => {
    return (
      danhSachGhe &&
      danhSachGhe.map((item, index) => {
        const classGheL1 = item.loaiGhe === "Vip" ? "seatL1" : "";
        const classGheL2 = item.loaiGhe === "Thuong" ? "seatL2" : "";
        const classGheDaDat = item.daDat === true ? "seatReser" : "";
        const classGheSelected = selectedSeats.some(
          (seat) => seat.maGhe === item.maGhe
        )
          ? "seatSelected"
          : "";
        return (
          <span key={item.maGhe}>
            <button
              onClick={() => {
                if (!item.daDat) {
                  const isSeatSelected = selectedSeats.some(
                    (seat) => seat.maGhe === item.maGhe
                  );
                  if (isSeatSelected) {
                    setSelectedSeats(
                      selectedSeats.filter((seat) => seat.maGhe !== item.maGhe)
                    );
                    setTotal(total - item.giaVe);
                  } else {
                    setSelectedSeats([...selectedSeats, item]);
                    setTotal(total + item.giaVe);
                  }
                }
              }}
              disabled={item.daDat}
              className={`seat ${classGheL1} ${classGheL2} ${classGheDaDat} ${classGheSelected}`}
            >
              {item.daDat ? "X" : item.tenGhe}
            </button>
            {(index + 1) % 16 === 0 && <br />}
          </span>
        );
      })
    );
  };

  const handleThanhToan = () => {
    const date = new Date();
    const formattedDate = format(date, "yyyy-MM-dd");
    const formattedTime = format(date, "HH:mm:ss");
    dispatch(setNgayDaDatVe(formattedDate));
    dispatch(setGioDaDatVe(formattedTime));
    dispatch(setDanhSachGheDaDat(selectedSeats));
    dispatch(setTongTienVe(total));
    navigate(`/thanhToan/`);
  };

  return (
    <div className="soDoGhe mt-5">
      <h4 className="text-white text-xl lg:text-2xl text-center mb-2">
        Sơ đồ ghế trong phòng chiếu 01
      </h4>
      <div className="text-center mt-8 text-white">
        <div className="m-auto w-3/4 h-4">
          <DatGheMainManChieuSang />
        </div>
        <p className="m-auto w-3/4 p-3 text-xl pt-6 duration-500 tracking-[1em] hover:tracking-[2em]">
          MÀN HÌNH
        </p>
        <div className="soDoGhe_SD_ghe mt-5 text-xs sm:text-sm">
          {renderGhe()}
        </div>
      </div>
      <div className="text-center">
        <div className="inline-flex gap-4 my-4 text-white" role="group">
          <div className="inline-flex">
            <div className="seat seatSelect"></div>
            <p className="mt-0 sm:mt-1 md:mt-3">Ghế bạn chọn</p>
          </div>
          <div className="inline-flex">
            <div className="seat seatReser"></div>
            <p className="mt-0 sm:mt-1 md:mt-3">Ghế đã đặt </p>
          </div>
          <div className="inline-flex">
            <div className="seat seatL1"></div>
            <p className="mt-0 sm:mt-1 md:mt-3">Ghế VIP</p>
          </div>
          <div className="inline-flex">
            <div className="seat seatL2"></div>
            <p className="mt-0 sm:mt-1 md:mt-3">Ghế Thường</p>
          </div>
        </div>
      </div>
      <div className="text-center text-white">
        <p>Ghế đã chọn:</p>
        <p>Tổng tiền: {total.toLocaleString()} VND</p>
      </div>
      <div className="text-center my-4">
        <button
          onClick={handleThanhToan}
          type="submit"
          className="btn_trang text-xl"
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
}
