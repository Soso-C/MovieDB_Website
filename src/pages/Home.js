import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../components/MovieCard/MovieCard";
import { addMoviesToStore } from "../features/movie.slice";

const Home = () => {
  const dispatch = useDispatch();

  const movieInfo = useSelector((state) => state.movies.movies.results);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_TMDB_KEY}&language=fr-Fr&page=1`
      )
      .then((res) => {
        dispatch(addMoviesToStore(res.data));
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-slate-800 h-screen w-full">
      <div className="max-w-7xl mx-auto pt-8 px-4">
        <h2 h2 className="text-xl text-white font-bold pt-6 mb-6">
          Top rated
          <i className="fa-solid fa-star text-yellow-400 text-xl ml-1"></i>
        </h2>
        <div className="flex gap-3 overflow-x-scroll w-full scrollbar">
          {movieInfo && movieInfo.slice(0,12).map((movie) => <MovieCard movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
