import React from "react";

export default function HomeImg() {
  return (
    <div>
      <figure className="mx-auto w-full max-w-screen-xl p-4 pt-8">
        <figcaption id="phimSapChieu" className="mb-6 text-center text-stone-400 font-bold text-2xl">
          PHIM SẮP CHIẾU
        </figcaption>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://www.letazzinediyoko.it/wp-content/uploads/letazzinediyoko-dune-banner.png"
          alt="img"
        />
      </figure>
    </div>
  );
}
