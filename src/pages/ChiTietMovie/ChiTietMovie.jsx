import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDataSelectedFilm } from "../../redux/Reducers/InfoSelectedFilmThunk";
import ChiTietDienVien from "./ChiTietDienVien";
import LichChieuPhim from "./LichChieuPhim";
import DatGheMain from "./DatGheMain";
export default function ChiTietMovie() {
  const { selectedFilmId } = useParams();
  const dispatch = useDispatch();
  const dataOfSelectedFilm = useSelector(
    (state) => state.InfoSelectedFilmSlice.data
  );

  useEffect(() => {
    dispatch(fetchDataSelectedFilm(selectedFilmId));
  }, [dispatch, selectedFilmId]);

  // console.log(dataOfSelectedFilm);

  return (
    <div className="bg-stone-800">
      <div className="relative">
        {/* Ảnh mờ phía sau */}
        <div className="absolute z-0 w-full">
          <div
            className="w-full bg-center bg-cover bg-no-repeat bg-[url('https://i.pinimg.com/564x/46/67/b5/4667b5f64382e76cf154c0fd79ff5a42.jpg')] bg-stone-700 bg-blend-multiply"
            style={{ height: 550 }}
          ></div>
        </div>

        {/* Thông tin bộ phim text */}
        <div className="relative z-10">
          <div className="mx-auto max-w-screen-xl px-4 pt-28 lg:pt-36">
            <h2 className="mb-2 font-bold tracking-tight leading-none text-white text-2xl md:text-3xl lg:text-4xl text-center">
              Thông tin bộ Phim
            </h2>
            <p className="text-stone-400 text-center">Các bước đặt vé:</p>
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
                <li className="flex items-center">
                  <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-stone-500 rounded-full shrink-0">
                    3
                  </span>
                  Chọn ghế
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
                    4
                  </span>
                  Thanh toán
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* card phim */}

        <div className="relative mx-auto w-full max-w-screen-xl p-4 z-10">
          <div className="flex flex-col md:flex-row items-center border rounded-lg shadow border-stone-700 hover:bg-center bg-top bg-cover bg-no-repeat bg-[url('https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-1.jpg?cbr=1&q=90')] bg-black/90 hover:bg-stone-800 bg-blend-multiply duration-500">
            <img
              className="object-cover rounded-t-lg h-60 md:h-auto w-full md:w-80 md:rounded-none md:rounded-s-lg"
              src={dataOfSelectedFilm ? dataOfSelectedFilm.hinhAnh : ""}
              alt="phim1"
            />
            <div className="p-6 flex-grow text-stone-400">
              <div className="mb-4">
                <p className="text-2xl">Tên phim: </p>
                <p className="font-bold text-white text-6xl">
                  {dataOfSelectedFilm ? dataOfSelectedFilm.tenPhim : ""}
                </p>
              </div>

              <div className="mb-2">
                <span>Thể loại: </span>
                <span className="text-white text-xl">
                  Viễn tưởng, hành động
                </span>
              </div>
              <div className="mb-2">
                <span>Độ tuổi: </span>
                <span className="text-white text-xl">16+</span>
              </div>
              <div className="mb-2">
                <span>Thời lượng: </span>
                <span className="text-white text-xl">120 phút</span>
              </div>
              <div className="mb-2">
                <span>Khởi chiếu: </span>

                {/*  item.ngayKhoiChieu.split("T")[0]; */}
                <span className="text-white text-xl">
                  {dataOfSelectedFilm
                    ? dataOfSelectedFilm.ngayKhoiChieu.split("T")[0]
                    : ""}
                </span>
              </div>
              <p className="text-justify mt-4">
                {dataOfSelectedFilm ? dataOfSelectedFilm.moTa : ""}
              </p>
              <div className="mt-4">
                <button
                  href="#cacBuocDatVe"
                  type="button"
                  className="btn_trang text-xl"
                >
                  <a href="#cacBuocDatVe">Mua ve ngay</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Diễn viên */}

        <ChiTietDienVien />
      </div>
      <figure className="mx-auto w-full max-w-screen-xl p-4 pb-8 lg:pb-20">
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://pbs.twimg.com/media/FbO7fUcWIAAI-xo.jpg:large"
          alt="des"
        />
      </figure>

      {/* Lịch chiếu phim */}
      <LichChieuPhim />

      <DatGheMain />

      {/* <HomeImg /> */}
      {/* <HomeCardMovie /> */}
    </div>
  );
}
