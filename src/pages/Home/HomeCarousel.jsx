"use client";

import React, { useEffect, useState } from "react";
import { Carousel, Flowbite } from "flowbite-react";
// import { FlowbiteVideo } from 'flowbite-react';
import axios from "axios";
import { http } from "../../api/config";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataBanner } from "../../redux/Reducers/HomeListBannerThunk";
import HomeCarouselVideo1 from './HomeCarouselVideo1'
import HomeCarouselVideo2 from './HomeCarouselVideo2'
import HomeCarouselVideo3 from './HomeCarouselVideo3'



export function HomeCarousel() {
  const dispatch = useDispatch();
  const dataListBanner = useSelector((state) => state.HomeListBannerSlice.data);
  useEffect(() => {
    dispatch(fetchDataBanner());
  }, [dispatch]);

  console.log(dataListBanner);
  return (
    <div className="bg-black" id="CarouselBanner" style={{ height: 600 }}>
      {/* h-56 sm:h-64 xl:h-80 2xl:h-96 */}
      {/* style={{height:800}} */}
      <Carousel pauseOnHover>

        <HomeCarouselVideo1 />
        <HomeCarouselVideo2 />
        <HomeCarouselVideo3 />

        {/* {dataListBanner && dataListBanner.map((banner) => (
            <img
              key={banner.maBanner}
              src={banner.hinhAnh}
              alt={`Banner for movie ${banner.maPhim}`}
            />
          ))} */}
      </Carousel>
    </div>
  );
}


