import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ChiTietMovie from "./pages/ChiTietMovie/ChiTietMovie";
import ThanhToanMovie from "./pages/ThanhToanMovie/ThanhToanMovie";
import QuanTriKHMovie from "./pages/QuanTriKhachHang/QuanTriKhachHang";
import HomeTemplate from "./pages/template/HomeTemplate";
import SignUpMovie from "./pages/SignUp/SignUpMovie";
import LoginMovie from "./pages/Login/LoginMovie";
import AdminDashBoard from "./pages/Admin/AdminDashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/infoKhachHang" element={<QuanTriKHMovie />}></Route>
          <Route path="/thanhtoan" element={<ThanhToanMovie />}></Route>
          <Route path="/signup" element={<SignUpMovie />}></Route>
          <Route path="/login" element={<LoginMovie />}></Route>
          <Route
            path="/chitietmovie/:selectedFilmId"
            element={<ChiTietMovie />}
          />
        </Route>
        <Route path="/admin" element={<AdminDashBoard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

