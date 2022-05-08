import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { addFavoriteMovie } from "../../features/movie.slice";

const FavoriteMovie = () => {
  const useremail = useSelector((state) => state.user.user.email);
  const favMovies = useSelector((state) => state.movies.favoriteMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    onSnapshot(doc(db, "users", useremail), (doc) => {
      dispatch(addFavoriteMovie(doc.data()?.favoriteMovies));
    });
  }, [useremail]);
  return (
    <div className="pt-32 font-bold flex flex-wrap h-screen gap-5 justify-center mx-auto max-w-7xl">
      {favMovies && favMovies.map((movie) => <MovieCard movie={movie.movie} />)}
    </div>
  );
};

export default FavoriteMovie;
