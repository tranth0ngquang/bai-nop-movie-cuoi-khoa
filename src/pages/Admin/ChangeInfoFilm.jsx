"use client";

import { Button, Modal, TextInput, Label, Checkbox } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateFilm } from "../../redux/Reducers/filmThunk";
import { Bounce, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import { format, parse, isValid } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function ChangeInfoFilm({ film }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [filmInfo, setFilmInfo] = useState({
    maPhim: film?.maPhim || 0,
    tenPhim: film?.tenPhim || "",
    trailer: film?.trailer || "",
    moTa: film?.moTa || "",
    maNhom: film?.maNhom || "GP01",
    ngayKhoiChieu: film?.ngayKhoiChieu || "",
    sapChieu: film?.sapChieu || false,
    dangChieu: film?.dangChieu || false,
    hot: film?.hot || false,
    danhGia: film?.danhGia || 0,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (film) {
      let parsedDate = new Date();
      if (film.ngayKhoiChieu && isValid(new Date(film.ngayKhoiChieu))) {
        parsedDate = new Date(film.ngayKhoiChieu);
      } else if (
        film.ngayKhoiChieu &&
        isValid(parse(film.ngayKhoiChieu, "dd/MM/yyyy", new Date()))
      ) {
        parsedDate = parse(film.ngayKhoiChieu, "dd/MM/yyyy", new Date());
      }
      setStartDate(parsedDate);
      setFilmInfo({
        ...film,
        ngayKhoiChieu: format(parsedDate, "dd/MM/yyyy"),
      });
    }
  }, [film]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilmInfo({
      ...filmInfo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setFilmInfo({
      ...filmInfo,
      ngayKhoiChieu: format(date, "dd/MM/yyyy"),
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpdateFilm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in filmInfo) {
      formData.append(key, filmInfo[key]);
    }
    if (selectedFile) {
      formData.append("File", selectedFile);
    }

    const updateFilmPromise = dispatch(updateFilm(formData));

    toast.promise(updateFilmPromise, {
      pending: "Đang cập nhật phim...",
      success: "Cập nhật phim thành công",
      error: {
        render({ data }) {
          return data.response &&
            data.response.data &&
            data.response.data.content
            ? data.response.data.content
            : "Cập nhật phim thất bại";
        },
      },
    });

    updateFilmPromise
      .then(() => {
        setOpenModal(false);
      })
      .catch((err) => {
        console.error("Error updating film:", err);
      });
  };

  return (
    <div>
      <Button
        className="custom-hover-green bg-inherit"
        onClick={() => setOpenModal(true)}
      >
        <i className="fa fa-pen text-green-600"></i>
      </Button>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Chỉnh sửa thông tin phim</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdateFilm} className="max-w-md mx-auto">
            {/* Tên phim */}
            <div className="mb-4">
              <Label htmlFor="tenPhim" value="Tên phim" />
              <TextInput
                id="tenPhim"
                name="tenPhim"
                type="text"
                placeholder="Tên phim"
                value={filmInfo.tenPhim}
                required
                onChange={handleChange}
              />
            </div>
            {/* Trailer */}
            <div className="mb-4">
              <Label htmlFor="trailer" value="Trailer" />
              <TextInput
                id="trailer"
                name="trailer"
                type="text"
                placeholder="Trailer"
                value={filmInfo.trailer}
                required
                onChange={handleChange}
              />
            </div>
            {/* Mô tả */}
            <div className="mb-4">
              <Label htmlFor="moTa" value="Mô tả" />
              <TextInput
                id="moTa"
                name="moTa"
                type="text"
                placeholder="Mô tả"
                value={filmInfo.moTa}
                required
                onChange={handleChange}
              />
            </div>
            {/* Ngày khởi chiếu */}
            <div className="mb-4">
              <Label htmlFor="ngayKhoiChieu" value="Ngày khởi chiếu" />
              <DatePicker
                id="ngayKhoiChieu"
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                className="w-full py-2.5 px-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholderText="dd/MM/yyyy"
              />
            </div>
            {/* Sắp chiếu, Đang chiếu, Hot */}
            <div className="mb-4">
              <Label className="block">Trạng thái</Label>
              <div className="flex items-center gap-4">
                <Checkbox
                  id="sapChieu"
                  name="sapChieu"
                  checked={filmInfo.sapChieu}
                  onChange={handleChange}
                />
                <Label htmlFor="sapChieu">Sắp chiếu</Label>
                <Checkbox
                  id="dangChieu"
                  name="dangChieu"
                  checked={filmInfo.dangChieu}
                  onChange={handleChange}
                />
                <Label htmlFor="dangChieu">Đang chiếu</Label>
                <Checkbox
                  id="hot"
                  name="hot"
                  checked={filmInfo.hot}
                  onChange={handleChange}
                />
                <Label htmlFor="hot">Hot</Label>
              </div>
            </div>
            {/* Đánh giá */}
            <div className="mb-4">
              <Label htmlFor="danhGia" value="Đánh giá" />
              <TextInput
                id="danhGia"
                name="danhGia"
                type="number"
                placeholder="Đánh giá"
                value={filmInfo.danhGia}
                required
                onChange={handleChange}
              />
            </div>
            {/* Hình ảnh */}
            <div className="mb-4">
              <Label htmlFor="hinhAnh" value="Hình ảnh" />
              <TextInput
                id="hinhAnh"
                name="hinhAnh"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <Button type="submit">Cập nhật</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
