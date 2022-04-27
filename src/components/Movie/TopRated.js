import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  // get popular movie
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_TMDB_KEY}&language=fr-Fr&page=1`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto pt-8 px-4">
      <h2 className="text-2xl text-white font-bold pt-6 mb-6">
        Top rated
        <i className="fa-solid fa-star text-yellow-400 text-xl ml-1"></i>
      </h2>
      <div className="flex gap-4 overflow-x-scroll w-full scrollbar">
        {movies && movies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
      </div>
    </div>
  );
};

export default TopRated;
