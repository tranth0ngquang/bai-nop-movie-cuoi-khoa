"use client";

import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import axios from "axios";
import { http } from "../../api/config";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataBanner } from "../../redux/Reducers/HomeListBannerThunk";

export function HomeCarousel() {
  const dispatch = useDispatch();
  const dataListBanner = useSelector((state) => state.HomeListBannerSlice.data);
  useEffect(() => {
    dispatch(fetchDataBanner());
  }, [dispatch]);

  console.log(dataListBanner);
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96" id="CarouselBanner">
      <Carousel>
        {dataListBanner &&
          dataListBanner.map((banner) => (
            <img
              key={banner.maBanner}
              src={banner.hinhAnh}
              alt={`Banner for movie ${banner.maPhim}`}
            />
          ))}
      </Carousel>
    </div>
  );
}
