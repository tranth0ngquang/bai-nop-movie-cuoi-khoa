import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { parseISO, format } from "date-fns";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchInfoLichChieuPhim } from "../../redux/Reducers/InfoLichChieuPhimThunk";
import { setMaLichChieu } from "../../redux/Reducers/DataDanhSachPhongVeSlice";
export default function LichChieuPhim() {
  const dispatch = useDispatch();
  const { selectedFilmId } = useParams();
  const [selectedRapChieu, setSelectedRapChieu] = useState([]);
  const [selectedAdress, setSelectedAdress] = useState([]);
  const rapChieu = useSelector(
    (state) => state.InfoLichChieuPhimSlice.rapChieu
  );
  const infoOfLichChieuPhim = useSelector(
    (state) => state.InfoLichChieuPhimSlice.data
  );

  const maLichChieu = useSelector(
    (state) => state.DataDanhSachPhongVeSlice.maLichChieu
  );

  useEffect(() => {
    dispatch(fetchInfoLichChieuPhim(selectedFilmId));
  }, [dispatch, selectedFilmId]);

  let movieRapChieu = () => {
    let objMang =
      rapChieu &&
      rapChieu.map((item) => {
        return (
          <div className="" key={item.maHeThongRap}>
            <button
              onClick={() => {
                setSelectedRapChieu(item.cumRapChieu);
              }}
              type="button"
              className="lichChieuPhim rounded-full"
            >
              <img
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
                src={item.logo}
                alt=""
              />
            </button>
          </div>
        );
      });
    return objMang;
  };

  const rapChieuDiaChi = selectedRapChieu;

  let movieRapChieuDiaChi = () => {
    let objMang = rapChieuDiaChi.map((item, index) => {
      return (
        <div className="" key={item.maCumRap}>
          <button
            type="button"
            className="rounded-lg lichChieuPhim w-full"
            onClick={() => {
              setSelectedAdress(item.lichChieuPhim);
            }}
          >
            <p className="text-sm sm:text-xl">{item.tenCumRap}</p>
            <p className="text-xs sm:text-sm">{item.diaChi}</p>
          </button>
        </div>
      );
    });
    return objMang;
  };

  const ngayChieu = selectedAdress;

  let movieNgayChieu = () => {
    let objMang = ngayChieu.map((item, index) => {
      const date = parseISO(item.ngayChieuGioChieu);
      const formattedDate = format(date, "yyyy-MM-dd");
      const formattedTime = format(date, "HH:mm:ss");
      return (
        <div className="" key={item.maLichChieu}>
          <button
            type="button"
            className="lichChieuPhim"
            onClick={() => {
              dispatch(setMaLichChieu(item.maLichChieu));
            }}
          >
            <p className="text-sm">{formattedDate}</p>
            <p className="text-4xl font-bold">{formattedTime}</p>
            <p className="text-sm">Mã lịch chiếu: {item.maLichChieu}</p>
          </button>
        </div>
      );
    });
    return objMang;
  };

  return (
    <div>
      {/* Rạp */}
      <div>
        <p
          id="cacBuocDatVe"
          className="font-bold text-white text-2xl text-center"
        >
          Các bước đặt vé:
        </p>
        <div className="mb-4 text-center">
          <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium justify-center rounded-lg shadow-sm text-stone-400 sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
            <li className="flex items-center text-white">
              <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-white rounded-full shrink-0">
                1
              </span>
              Chọn rạp
              <svg
                className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-stone-500 rounded-full shrink-0">
                2
              </span>
              Chọn lịch chiếu
              <svg
                className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-stone-500 rounded-full shrink-0">
                3
              </span>
              Chọn ghế
            </li>
          </ol>
        </div>
      </div>
      <div className="text-center">
        <div
          className="inline-flex rounded-md shadow-sm gap-2 sm:gap-4 mb-8 px-4"
          role="group"
        >
          {movieRapChieu()}
        </div>
      </div>
      <div className="text-center">
        <div
          className="inline-flex rounded-md shadow-sm gap-2 sm:gap-4 mb-8 px-4"
          role="group"
        >
          {movieRapChieuDiaChi()}
        </div>
      </div>

      {/* Ngày */}
      <div className="mb-4 text-center">
        <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium justify-center rounded-lg shadow-sm text-stone-400 sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
          <li className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-stone-500 rounded-full shrink-0">
              1
            </span>
            Chọn rạp
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li className="flex items-center text-white">
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-white rounded-full shrink-0">
              2
            </span>
            Chọn lịch chiếu
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-stone-500 rounded-full shrink-0">
              3
            </span>
            Chọn ghế
          </li>
        </ol>
      </div>
      <div className="bg-stone-700 text-center">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {movieNgayChieu()}
        </div>
      </div>

      <div className="mb-4 text-center">
        <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium justify-center rounded-lg shadow-sm text-stone-400 sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
          <li className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-stone-500 rounded-full shrink-0">
              1
            </span>
            Chọn rạp
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-stone-500 rounded-full shrink-0">
              2
            </span>
            Chọn lịch chiếu
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li className="flex items-center text-white">
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-white rounded-full shrink-0">
              3
            </span>
            Chọn ghế
          </li>
        </ol>
      </div>
    </div>
  );
}
