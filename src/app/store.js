import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movie.slice";
import userReducer from "../features/user.slice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
    user: userReducer,
  },
});
