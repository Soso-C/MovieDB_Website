import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    researchMovies: [],
    favoriteMovies: [],
  },
  reducers: {
    addMoviesToStore: (state, { payload }) => {
      state.movies = payload;
    },
    researchMovies: (state, { payload }) => {
      state.researchMovies = payload;
    },
    addFavoriteMovie: (state, { payload }) => {
      state.favoriteMovies = payload;
    },
    delFavoriteMovie: (state, { payload }) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.movie.id !== payload
      );
    },
  },
});

export const {
  addMoviesToStore,
  researchMovies,
  addFavoriteMovie,
  delFavoriteMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
