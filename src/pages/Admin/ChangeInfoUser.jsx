// ChangeInfoUser.js
import React, { useState, useEffect } from "react";
import { Button, Modal, TextInput, Label } from "flowbite-react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/Reducers/userThunk";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ChangeInfoUser({ user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(user);
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      ...formData,
      maNhom: formData.maNhom || "GP01",
    };

    const updatePromise = dispatch(updateUser(updatedData));

    toast.promise(
      updatePromise,
      {
        pending: 'Đang cập nhật thông tin người dùng...',
        success: 'Cập nhật thành công',
        error: 'Cập nhật thất bại, thử lại sau'
      }
    );

    updatePromise.then(handleCloseModal);
  };

  return (
    <div>
      <Button className="custom-hover-green bg-inherit" onClick={handleOpenModal}>
        <i className="fa fa-pen text-green-600"></i>
      </Button>

      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <Modal.Header>Chỉnh sửa thông tin người dùng</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="taiKhoan">Tài khoản</Label>
              <TextInput
                id="taiKhoan"
                name="taiKhoan"
                value={formData.taiKhoan}
                onChange={handleChange}
                readOnly
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="matKhau">Mật khẩu</Label>
              <TextInput
                id="matKhau"
                name="matKhau"
                type="password"
                value={formData.matKhau}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <TextInput
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="soDt">Số điện thoại</Label>
              <TextInput
                id="soDt"
                name="soDt"
                value={formData.soDt}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="maNhom">Mã nhóm</Label>
              <TextInput
                id="maNhom"
                name="maNhom"
                value={formData.maNhom || "GP01"}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="maLoaiNguoiDung">Loại người dùng</Label>
              <TextInput
                id="maLoaiNguoiDung"
                name="maLoaiNguoiDung"
                value={formData.maLoaiNguoiDung}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="hoTen">Họ tên</Label>
              <TextInput
                id="hoTen"
                name="hoTen"
                value={formData.hoTen}
                onChange={handleChange}
              />
            </div>
            <Button type="submit">Lưu</Button>
          </form>
        </Modal.Body>
      </Modal>

    </div>
  );
}
