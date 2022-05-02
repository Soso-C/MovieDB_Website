import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getFavoriteMovies } from "../../api/movies";

const FavoriteMovie = () => {
  const userid = useSelector((state) => state.user.user.uid);

  useEffect(() => {
    getFavoriteMovies(userid);
  });
  return <div>Hello From Favorite</div>;
};

export default FavoriteMovie;
