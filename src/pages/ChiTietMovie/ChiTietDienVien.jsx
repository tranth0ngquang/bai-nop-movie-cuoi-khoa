import React from "react";

const imgCardDienVien = [
  {
    stt: 1,
    name: "Timothée",
    name2: "Paul",
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-1.jpg?cbr=1&q=90",
  },

  {
    stt: 2,
    name: "Zendaya",
    name2: "Chani",
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-2.jpg?cbr=1&q=90",
  },

  {
    stt: 3,
    name: "Rebecca",
    name2: "Jessica",
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-3.jpg?cbr=1&q=90",
  },

  {
    stt: 4,
    name: "Oscar Isaac",
    name2: "Leto Atreides",
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-4.jpg?cbr=1&q=90",
  },

  {
    stt: 5,
    name: "Dastmalchian",
    name2: "De Vries",
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-5.jpg?cbr=1&q=90",
  },

  {
    stt: 6,
    name: "Charlotte",
    name2: "Mohiam",
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-6.jpg?cbr=1&q=90",
  },

  {
    stt: 7,
    name: "Josh Brolin",
    name2: "Halleck",
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-7.jpg?cbr=1&q=90",
  },

  {
    stt: 8,
    name: "Stellan",
    name2: "Harkonnen",
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-8.jpg?cbr=1&q=90",
  },

  {
    stt: 9,
    name: "Sharon",
    name2: "Liet-Kynes",
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-1.jpg?cbr=1&q=90",
  },

  {
    stt: 10,
    name: "Wellington",
    name2: "Yueh",
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-2.jpg?cbr=1&q=90",
  },
];

const imgCardPhanDoan = [
  {
    stt: 1,
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F01%2Fdune-part-two-timothee-chalamet-zendaya-austin-butler-florence-pugh-josh-brolin-first-look-images-revealed-015.jpg?cbr=1&q=90",
  },

  {
    stt: 2,
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F01%2Fdune-part-two-timothee-chalamet-zendaya-austin-butler-florence-pugh-josh-brolin-first-look-images-revealed-013.jpg?cbr=1&q=90",
  },

  {
    stt: 3,
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F01%2Fdune-part-two-timothee-chalamet-zendaya-austin-butler-florence-pugh-josh-brolin-first-look-images-revealed-002.jpg?cbr=1&q=90",
  },

  {
    stt: 4,
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F01%2Fdune-part-two-timothee-chalamet-zendaya-austin-butler-florence-pugh-josh-brolin-first-look-images-revealed-014.jpg?cbr=1&q=90",
  },

  {
    stt: 5,
    src: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F01%2Fdune-part-two-timothee-chalamet-zendaya-austin-butler-florence-pugh-josh-brolin-first-look-images-revealed-024.jpg?cbr=1&q=90",
  },
];

let renderCardDienVien = () => {
  let objMang = imgCardDienVien.map((item, index) => {
    return (
      <div className="" key={item.stt}>
        <div className="max-w-sm shadowtext-center model_box">
          <div className="model_img relative h-32 rounded-full border border-stone-700 hover:border-stone-500">
            <a href="/">
              <img className="" src={item.src} alt="" />
            </a>
          </div>

          <div className="p-2 text-center">
            <p className="text-stone-400">{item.name}</p>
            <p className="text-white text-sm">{item.name2}</p>
          </div>
        </div>
      </div>
    );
  });
  return objMang;
};

let renderCardPhanDoan = () => {
  let objMang = imgCardPhanDoan.map((item, index) => {
    return (
      <div className="" key={item.stt}>
        <div className="max-w-sm shadowtext-center model_box">
          <div className="model_img relative h-32 rounded-lg border border-stone-700 hover:border-stone-500">
            <a href="/">
              <img className="h-full w-full" src={item.src} alt="" />
            </a>
          </div>

          <div className="p-2 text-center">
            <p className="text-stone-400">{item.name}</p>
            <p className="text-white text-sm">{item.name2}</p>
          </div>
        </div>
      </div>
    );
  });
  return objMang;
};

export default function ChiTietDienVien() {
  return (
    <div className="text-center">
      <h2 className="mt-4 font-bold tracking-tight leading-none text-white text-xl lg:text-2xl text-center">
        Các phân đoạn chính trong phim
      </h2>
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-4 pb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-6">
        {renderCardPhanDoan()}
      </div>
      <h2 className="mt-4 font-bold tracking-tight leading-none text-white text-xl lg:text-2xl text-center">
        Diễn viên
      </h2>
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-4 pb-8 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-8 sm:gap-6">
        {renderCardDienVien()}
      </div>
    </div>
  );
}
