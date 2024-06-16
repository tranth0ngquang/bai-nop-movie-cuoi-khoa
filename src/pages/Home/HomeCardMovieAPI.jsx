import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/Reducers/ListFilmBaseOnPageThunk";
import {
  nextPage,
  prevPage,
} from "../../redux/Reducers/ListFilmBaseOnPageSlice";
import { useNavigate } from "react-router-dom";

export default function HomeCardMovieAPI() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataListFilmBaseOnPage = useSelector(
    (state) => state.ListFilmBaseOnPageSlice.data
  );
  const soTrang = useSelector((state) => state.ListFilmBaseOnPageSlice.soTrang);
  useEffect(() => {
    dispatch(fetchData(soTrang));
  }, [dispatch, soTrang]);

  const handleNext = () => {
    dispatch(nextPage());
  };

  const handleBack = () => {
    dispatch(prevPage());
  };

  console.log(dataListFilmBaseOnPage);
  let renderCardMoiveAPI = () => {
    let objMang =
      dataListFilmBaseOnPage &&
      dataListFilmBaseOnPage.map((item) => {
        return (
          <div className="" key={item.maPhim} id="">
            <div className="max-w-sm border rounded-lg shadow bg-stone-900 border-stone-700 text-center hover:bg-black hover:border-stone-500 model_box">
              <div className="model_img relative h-60">
                <a href="/">
                  <img className="" src={item.hinhAnh} alt="" />
                </a>
                <div className="absolute bottom-2 z-10 cardMovie_none">
                  <span className="p-3">
                    <button
                      type="button"
                      className="btn_trang text-sm"
                      onClick={() => {
                        navigate(`/chitietmovie/${item.maPhim}`);
                      }}
                    >
                      Xem chi tiết
                    </button>
                  </span>
                  <span className="p-3">
                    <button
                      type="button"
                      className="btn_den text-sm"
                      onClick={() => {
                        navigate(`/chitietmovie/${item.maPhim}`);
                      }}
                    >
                      Đặt vé ngay
                    </button>
                  </span>
                </div>
              </div>

              <div className="p-2">
                <p className="text-stone-400 cardMovie_block">
                  {item.ngayKhoiChieu.split("T")[0]}
                </p>
                <p className="text-stone-400 cardMovie_none text-sm">
                  Kinh dị | {item.ngayKhoiChieu.split("T")[0]} | 18+
                </p>
                <a href="#">
                  <h5 className="mb-2 font-bold text-white text-xl">
                    {item.tenPhim.length > 15
                      ? item.tenPhim.substring(0, 15) + "..."
                      : item.tenPhim}
                  </h5>
                </a>
              </div>
            </div>
          </div>
        );
      });
    return objMang;
  };

  return (
    <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-6">
      <>{renderCardMoiveAPI()}</>

      <>
        <div className="flex justify-center	w-full text-white">
          <button onClick={handleBack} className="mr-5 text-black">
            <i className="fa fa-arrow-left"></i>
          </button>
          <button onClick={handleNext} className="text-black">
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </>
    </div>
  );
}
