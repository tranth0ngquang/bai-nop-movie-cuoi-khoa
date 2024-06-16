// "use client";

// import { Table, Button, TextInput } from "flowbite-react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchFilms, searchFilms } from "../../redux/Reducers/filmThunk";
// import { setCurrentPage } from "../../redux/Reducers/filmSlice";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ChangeInfoFilm from "./ChangeInfoFilm";
// import ButtonDeleteFilm from "./ButtonDeleteFilm";

// export default function ManageFilm() {
//   const dispatch = useDispatch();
//   const { films, currentPage, totalPages } = useSelector(
//     (state) => state.filmSlice
//   );
//   const [searchKeyword, setSearchKeyword] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchPromise = dispatch(fetchFilms(currentPage));
//       toast.promise(fetchPromise, {
//         pending: "Đang tải dữ liệu...",
//         success: "Dữ liệu đã được tải",
//         error: "Tải dữ liệu thất bại",
//       });
//     };
//     fetchData();
//   }, [dispatch, currentPage]);

//   const handleSearch = () => {
//     const searchPromise = dispatch(
//       searchFilms({ keyword: searchKeyword, page: 1 })
//     );
//     toast.promise(searchPromise, {
//       pending: "Đang tìm kiếm...",
//       success: "Tìm kiếm hoàn tất",
//       error: "Tìm kiếm thất bại",
//     });
//   };

//   const handleClearSearch = () => {
//     setSearchKeyword("");
//     const fetchPromise = dispatch(fetchFilms(1));
//     toast.promise(fetchPromise, {
//       pending: "Đang tải lại dữ liệu...",
//       success: "Dữ liệu đã được tải",
//       error: "Tải dữ liệu thất bại",
//     });
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       dispatch(setCurrentPage(currentPage - 1));
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       dispatch(setCurrentPage(currentPage + 1));
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("vi-VN");
//   };

//   console.log("phim", films);

//   return (
//     <div className="overflow-x-auto">
//       <form className="flex max-w-md gap-4 mb-6">
//         <TextInput
//           placeholder="Tìm kiếm phim theo tên"
//           id="searchFilm"
//           type="text"
//           className="w-4/6"
//           value={searchKeyword}
//           onChange={(e) => setSearchKeyword(e.target.value)}
//           required
//         />
//         <Button type="button" onClick={handleSearch}>
//           <i className="fa fa-search"></i>
//         </Button>
//         <Button type="button" color="gray" onClick={handleClearSearch}>
//           Reset
//         </Button>
//       </form>

//       <Table>
//         <Table.Head>
//           <Table.HeadCell>Tên phim</Table.HeadCell>
//           <Table.HeadCell>Mã phim</Table.HeadCell>
//           <Table.HeadCell>Mô tả</Table.HeadCell>
//           <Table.HeadCell>Ngày chiếu</Table.HeadCell>
//           <Table.HeadCell>Đánh giá</Table.HeadCell>
//           <Table.HeadCell>Hình ảnh</Table.HeadCell>
//           <Table.HeadCell>Chức năng</Table.HeadCell>
//         </Table.Head>
//         <Table.Body className="divide-y">
//           {films &&
//             films.map((film, index) => (
//               <Table.Row
//                 key={index}
//                 className="bg-white dark:border-gray-700 dark:bg-gray-800"
//               >
//                 <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//                   {film.tenPhim}
//                 </Table.Cell>
//                 <Table.Cell>{film.maPhim}</Table.Cell>
//                 <Table.Cell>{film.moTa}</Table.Cell>
//                 <Table.Cell>{formatDate(film.ngayKhoiChieu)}</Table.Cell>
//                 <Table.Cell>{film.danhGia}</Table.Cell>
//                 <Table.Cell>
//                   <img
//                     src={film.hinhAnh}
//                     alt={film.tenPhim}
//                     className="w-16 h-16 object-cover"
//                   />
//                 </Table.Cell>
//                 <Table.Cell className="flex space-x-2">
//                   <ChangeInfoFilm film={film} />
//                   <ButtonDeleteFilm maPhim={film.maPhim} />
//                 </Table.Cell>
//               </Table.Row>
//             ))}
//         </Table.Body>
//       </Table>

//       <div className="flex justify-between mt-4">
//         <Button disabled={currentPage === 1} onClick={handlePrevious}>
//           Previous
//         </Button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <Button disabled={currentPage === totalPages} onClick={handleNext}>
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// }
"use client";

import { Table, Button, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms, searchFilms } from "../../redux/Reducers/filmThunk";
import { setCurrentPage } from "../../redux/Reducers/filmSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChangeInfoFilm from "./ChangeInfoFilm";
import ButtonDeleteFilm from "./ButtonDeleteFilm";

export default function ManageFilm() {
  const dispatch = useDispatch();
  const { films, currentPage, totalPages } = useSelector(
    (state) => state.filmSlice
  );
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchPromise = dispatch(fetchFilms(currentPage));
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
      searchFilms({ keyword: searchKeyword, page: 1 })
    );
    toast.promise(searchPromise, {
      pending: "Đang tìm kiếm...",
      success: "Tìm kiếm hoàn tất",
      error: "Tìm kiếm thất bại",
    });
  };

  const handleClearSearch = () => {
    setSearchKeyword("");
    const fetchPromise = dispatch(fetchFilms(1));
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN");
  };

  return (
    <div className="overflow-x-auto">
      <form className="flex max-w-md gap-4 mb-6">
        <TextInput
          placeholder="Tìm kiếm phim theo tên"
          id="searchFilm"
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
          <Table.HeadCell>Tên phim</Table.HeadCell>
          <Table.HeadCell>Mã phim</Table.HeadCell>
          <Table.HeadCell>Mô tả</Table.HeadCell>
          <Table.HeadCell>Ngày chiếu</Table.HeadCell>
          <Table.HeadCell>Đánh giá</Table.HeadCell>
          <Table.HeadCell>Hình ảnh</Table.HeadCell>
          <Table.HeadCell>Chức năng</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {films &&
            films.map((film, index) => (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {film.tenPhim}
                </Table.Cell>
                <Table.Cell>{film.maPhim}</Table.Cell>
                <Table.Cell>{film.moTa}</Table.Cell>
                <Table.Cell>{formatDate(film.ngayKhoiChieu)}</Table.Cell>
                <Table.Cell>{film.danhGia}</Table.Cell>
                <Table.Cell>
                  <img
                    src={film.hinhAnh}
                    alt={film.tenPhim}
                    className="w-16 h-16 object-cover"
                  />
                </Table.Cell>
                <Table.Cell className="flex space-x-2">
                  <ChangeInfoFilm film={film} />
                  <ButtonDeleteFilm maPhim={film.maPhim} />
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
