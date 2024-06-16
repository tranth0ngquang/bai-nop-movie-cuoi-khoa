import { createSlice } from "@reduxjs/toolkit";

const filmSlice = createSlice({
  name: "film",
  initialState: {
    films: [],
    currentPage: 1,
    totalPages: 1,
    error: null,
  },
  reducers: {
    fetchFilmsSuccess: (state, action) => {
      state.films = action.payload.items;
      state.totalPages = action.payload.totalPages;
    },
    fetchFilmsFailure: (state, action) => {
      state.error = action.payload;
    },
    addFilm: (state, action) => {
      state.films.push(action.payload);
    },
    updateFilmSuccess: (state, action) => {
      const updatedFilm = action.payload;
      const index = state.films.findIndex((film) => film.maPhim === updatedFilm.maPhim);
      if (index !== -1) {
        state.films[index] = updatedFilm;
      }
    },
    deleteFilmSuccess: (state, action) => {
      state.films = state.films.filter((film) => film.maPhim !== action.payload);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilms: (state, action) => {
      state.films = action.payload;
    },
  },
});

export const {
  fetchFilmsSuccess,
  fetchFilmsFailure,
  addFilm,
  updateFilmSuccess,
  deleteFilmSuccess,
  setCurrentPage,
  setFilms,
} = filmSlice.actions;
export default filmSlice.reducer;
