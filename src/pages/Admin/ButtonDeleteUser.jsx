import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/Reducers/userThunk";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ButtonDeleteUser({ user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    const deletePromise = dispatch(deleteUser(user.taiKhoan));

    toast.promise(
      deletePromise,
      {
        pending: "Đang xóa người dùng...",
        success: "Xóa người dùng thành công",
        error: {
          render({ data }) {
            // Kiểm tra lỗi từ response của API và hiển thị nội dung của lỗi
            if (data.response && data.response.data && data.response.data.content) {
              return data.response.data.content;
            } else {
              return "Xóa người dùng thất bại";
            }
          },
        },
      }
    );

    deletePromise.then(handleCloseModal).catch(handleCloseModal);
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
        <Modal.Header>Xác nhận xóa người dùng</Modal.Header>
        <Modal.Body>
          <p>Bạn có chắc chắn muốn xóa tài khoản {user.taiKhoan}?</p>
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
