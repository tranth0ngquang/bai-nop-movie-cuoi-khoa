"use client";

import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useDispatch } from "react-redux";
import { deleteFilm } from "../../redux/Reducers/filmThunk";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ButtonDeleteFilm({ maPhim }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    const deletePromise = dispatch(deleteFilm(maPhim));

    toast.promise(deletePromise, {
      pending: "Đang xóa phim...",
      success: "Xóa phim thành công",
      error: {
        render({ data }) {
          return data.response && data.response.data && data.response.data.content
            ? data.response.data.content
            : "Xóa phim thất bại";
        },
      },
    });

    deletePromise.then(handleCloseModal);
  };

  return (
    <>
      <Button
        className="bg-inherit custom-hover-bg-red-200"
        onClick={handleOpenModal}
      >
        <i className="fa fa-trash text-red-700"></i>
      </Button>

      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <Modal.Header>Xác nhận xóa phim</Modal.Header>
        <Modal.Body>
          <p>Bạn có chắc chắn muốn xóa mã phim {maPhim}?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={handleDelete}>
            Xóa
          </Button>
          <Button color="gray" onClick={handleCloseModal}>
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
