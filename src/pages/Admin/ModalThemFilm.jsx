"use client";

import { Button, Modal, TextInput, Label, Checkbox } from "flowbite-react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createFilm } from "../../redux/Reducers/filmThunk";
import { Bounce, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function ModalThemPhim() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  let filmInfo = useRef({
    maPhim: 0,
    tenPhim: "",
    trailer: "",
    moTa: "",
    maNhom: "GP01",
    ngayKhoiChieu: format(new Date(), "dd/MM/yyyy"),
    sapChieu: true,
    dangChieu: true,
    hot: true,
    danhGia: 10,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    filmInfo.current = { ...filmInfo.current, [name]: value };
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    filmInfo.current.ngayKhoiChieu = format(date, "dd/MM/yyyy");
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleAddFilm = (e) => {
    e.preventDefault();
    let formData = new FormData();
    for (let key in filmInfo.current) {
      formData.append(key, filmInfo.current[key]);
    }
    formData.append("File", selectedFile);

    const createFilmPromise = dispatch(createFilm(formData));

    toast.promise(createFilmPromise, {
      pending: "Đang thêm phim...",
      success: "Thêm phim thành công",
      error: {
        render({ data }) {
          return data.response &&
            data.response.data &&
            data.response.data.content
            ? data.response.data.content
            : "Thêm phim thất bại";
        },
      },
    });

    createFilmPromise
      .then(() => {
        setOpenModal(false);
      })
      .catch((err) => {
        console.error("Error adding film:", err);
      });
  };

  return (
    <div className="flex justify-end">
      <Button onClick={() => setOpenModal(true)}>Thêm phim</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Thêm phim</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddFilm} className="max-w-md mx-auto">
            {/* Tên phim */}
            <div className="mb-4">
              <Label htmlFor="tenPhim" value="Tên phim" />
              <TextInput
                id="tenPhim"
                name="tenPhim"
                type="text"
                placeholder="Tên phim"
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
                  checked={filmInfo.current.sapChieu}
                  onChange={(e) =>
                    handleChange({
                      target: { name: "sapChieu", value: e.target.checked },
                    })
                  }
                />
                <Label htmlFor="sapChieu">Sắp chiếu</Label>
                <Checkbox
                  id="dangChieu"
                  name="dangChieu"
                  checked={filmInfo.current.dangChieu}
                  onChange={(e) =>
                    handleChange({
                      target: { name: "dangChieu", value: e.target.checked },
                    })
                  }
                />
                <Label htmlFor="dangChieu">Đang chiếu</Label>
                <Checkbox
                  id="hot"
                  name="hot"
                  checked={filmInfo.current.hot}
                  onChange={(e) =>
                    handleChange({
                      target: { name: "hot", value: e.target.checked },
                    })
                  }
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
                required
                onChange={handleFileChange}
              />
            </div>
            <Button type="submit">Thêm</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
