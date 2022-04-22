import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movie.slice"

export default configureStore({
    reducer: {
      movies: moviesReducer
    }
  });
  