import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFavoriteMovies } from "../../api/movies";

const FavoriteMovie = () => {
  const [favorite, setFavorite] = useState({});
  const userid = useSelector((state) => state.user.user.uid);

  useEffect(() => {
    getFavoriteMovies(userid)
      .then((res) => setFavorite(res[0].favoriteMovies))
      .catch((err) => console.log(err));
    console.log(favorite);
  }, [userid]);
  return (
    <div className="pt-20 font-bold">
      <div>{favorite[0]}</div>
      <div>{favorite[1]}</div>
    </div>
  );
};

export default FavoriteMovie;
