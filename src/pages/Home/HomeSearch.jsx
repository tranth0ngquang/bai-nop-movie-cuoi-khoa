import React from "react";

export default function HomeSearch() {
  return (
    <form className="mx-auto w-full max-w-screen-md p-4 lg:pt-20 pt-8">
      <h2
        id="phimDangChieu"
        className="mb-8 text-center text-stone-400 font-bold text-2xl"
      >
        PHIM ĐANG CHIẾU
      </h2>
      {/* <div className="flex">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium sr-only text-white"
        ></label>

        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm rounded-e-lg border-s-2 border focus:ring-blue-500 bg-stone-900 border-s-stone-700 border-stone-600 placeholder-stone-400 text-white focus:border-blue-500"
            placeholder="Tìm kiếm phim..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white  rounded-e-lg border border-blue-700 focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div> */}
    </form>
  );
}
