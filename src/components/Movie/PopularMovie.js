import React, { useState, useEffect } from "react";
import { getMovies } from "../../api/movies";
import MovieCard from "./MovieCard";

const PopularMovie = () => {
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_TMDB_KEY}&language=fr-Fr&page=1`;

  useEffect(() => {
    getMovies(url)
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div className="max-w-7xl mx-auto pt-8 px-4">
      <h2 className="text-2xl text-white font-bold pt-6 mb-6">Popular</h2>
      <div className="flex gap-4 overflow-x-scroll w-full scrollbar">
        {movies &&
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default PopularMovie;
