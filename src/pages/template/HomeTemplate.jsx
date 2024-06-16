import React from "react";
import Header from "../../Components/General/Header";
import Footer from "../../Components/General/Footer";
import { Outlet } from "react-router-dom";
import HomeImg from "../Home/HomeImg";
import HomeCardMovie from "../Home/HomeCardMovie";

export default function HomeTemplate() {
  return (
    <div className="bg-stone-800">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <HomeImg />
      <HomeCardMovie />
      <Footer />
    </div>
  );
}
