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

  const deleteFavorite = async (id) => {
    const userTarget = doc(db, "users", useremail);
    try {
      const result = favMovies.filter()
    }
    catch (error){
      console.log(error);
    }

  }

  return (
    <div className="pt-32 flex flex-wrap h-full gap-5 justify-center mx-auto max-w-7xl">
      {favMovies &&
        favMovies.map((movie) => (
          <MovieCard movie={movie.movie} key={movie.movie.id} delete={deleteFavorite}/>
        ))}
    </div>
  );
};

export default FavoriteMovie;
