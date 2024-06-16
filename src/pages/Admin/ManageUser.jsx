"use client";

import { Table, Button, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, searchUsers } from "../../redux/Reducers/userThunk";
import { setCurrentPage, setUsers } from "../../redux/Reducers/userSlice";
import ButtonDeleteUser from "./ButtonDeleteUser";
import ChangeInfoUser from "./ChangeInfoUser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ManageUser() {
  const dispatch = useDispatch();
  const { users, currentPage, totalPages } = useSelector(
    (state) => state.userSlice
  );
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchPromise = dispatch(fetchUsers(currentPage));
      toast.promise(fetchPromise, {
        pending: "Đang tải dữ liệu...",
        success: "Dữ liệu đã được tải",
        error: "Tải dữ liệu thất bại",
      });
    };
    fetchData();
  }, [dispatch, currentPage]);

  const handleSearch = () => {
    const searchPromise = dispatch(
      searchUsers({ keyword: searchKeyword, page: 1 })
    );
    toast.promise(searchPromise, {
      pending: "Đang tìm kiếm...",
      success: "Tìm kiếm hoàn tất",
      error: "Tìm kiếm thất bại",
    });
  };

  const handleClearSearch = () => {
    setSearchKeyword("");
    const fetchPromise = dispatch(fetchUsers(1));
    toast.promise(fetchPromise, {
      pending: "Đang tải lại dữ liệu...",
      success: "Dữ liệu đã được tải",
      error: "Tải dữ liệu thất bại",
    });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <div className="overflow-x-auto">
      <form className="flex max-w-md gap-4 mb-6">
        <TextInput
          placeholder="Tìm kiếm người dùng theo tài khoản"
          id="searchUser"
          type="text"
          className="w-4/6"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          required
        />
        <Button type="button" onClick={handleSearch}>
          <i className="fa fa-search"></i>
        </Button>
        <Button type="button" color="gray" onClick={handleClearSearch}>
          Reset
        </Button>
      </form>

      <Table>
        <Table.Head>
          <Table.HeadCell>Tài khoản</Table.HeadCell>
          <Table.HeadCell>Họ tên</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Số điện thoại </Table.HeadCell>
          <Table.HeadCell>Loại người dùng </Table.HeadCell>
          <Table.HeadCell> Chức năng </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users &&
            users.map((user, index) => (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user.taiKhoan}
                </Table.Cell>
                <Table.Cell>{user.hoTen}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.soDt}</Table.Cell>
                <Table.Cell>{user.maLoaiNguoiDung}</Table.Cell>
                <Table.Cell className="flex space-x-2">
                  <ChangeInfoUser user={user} />
                  <ButtonDeleteUser user={user} />
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>

      <div className="flex justify-between mt-4">
        <Button disabled={currentPage === 1} onClick={handlePrevious}>
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button disabled={currentPage === totalPages} onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}
