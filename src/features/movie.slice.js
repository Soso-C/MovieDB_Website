import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    researchMovies: [],
    pageMovie: 1,
  },
  reducers: {
    addMoviesToStore: (state, { payload }) => {
      state.movies = payload;
    },
    researchMovies: (state, { payload }) => {
      state.researchMovies = payload;
    },
  },
});

export const { addMoviesToStore, researchMovies } = movieSlice.actions;
export default movieSlice.reducer;
