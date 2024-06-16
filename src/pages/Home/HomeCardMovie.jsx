import React from "react";

export default function HomeCardMovie() {
  const imgCardMovie = [
    {
      stt: 1,
      name: "Dune 1",
      LoaiPhim: "VienTuong",
      Lich: "20/05/2024",
      Tuoi: "16+",
      src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-1.jpg?cbr=1&q=90",
    },

    {
      stt: 2,
      name: "Dune 2",
      LoaiPhim: "VienTuong",
      Lich: "20/05/2024",
      Tuoi: "16+",
      src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-2.jpg?cbr=1&q=90",
    },

    {
      stt: 3,
      name: "Dune 3",
      LoaiPhim: "VienTuong",
      Lich: "20/05/2024",
      Tuoi: "16+",
      src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-5.jpg?cbr=1&q=90",
    },

    {
      stt: 4,
      name: "Dune 4",
      LoaiPhim: "VienTuong",
      Lich: "20/05/2024",
      Tuoi: "16+",
      src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-3.jpg?cbr=1&q=90",
    },

    {
      stt: 5,
      name: "Dune 5",
      LoaiPhim: "VienTuong",
      Lich: "20/05/2024",
      Tuoi: "16+",
      src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-8.jpg?cbr=1&q=90",
    },
  ];

  let renderCardMoive = () => {
    let objMang = imgCardMovie.map((item) => {
      return (
        <div className="" key={item.stt}>
          <div className="max-w-sm border rounded-lg shadow bg-stone-900 border-stone-700 text-center hover:bg-black hover:border-stone-500 model_box">
            <div className="model_img relative h-100">
              <a href="/">
                <img className="" src={item.src} alt="" />
              </a>
              <div className="absolute bottom-2 z-10 cardMovie_none">
                <span className="p-3">
                  <button type="button" className="btn_trang text-sm">
                    Xem chi tiết
                  </button>
                </span>
                <span className="p-3">
                  <button type="button" className="btn_den text-sm">
                    Đặt vé ngay
                  </button>
                </span>
              </div>
            </div>

            <div className="p-2">
              <p className="text-stone-400 cardMovie_block">{item.Lich}</p>
              <p className="text-stone-400 cardMovie_none text-sm">
                {item.LoaiPhim} | {item.Lich} | {item.Tuoi}
              </p>
              <a href="/">
                <h5 className="mb-2 font-bold text-white text-2xl">
                  {item.name}
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
    <div
      id="tinTuc"
      className="mx-auto w-full max-w-screen-xl p-4 pt-8 pb-8 lg:pb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-6"
    >
      {renderCardMoive()}
    </div>
  );
}
