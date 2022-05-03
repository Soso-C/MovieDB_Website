import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { researchMovies } from "../../features/movie.slice";
import { getQueryMovies } from "../../api/movies";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get("movies") || "";
  let pageMovie = searchParams.get("page") || "";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_TMDB_KEY}&language=fr-Fr&query=${searchMovie}&page=${pageMovie}&include_adult=false`;

  let navigate = useNavigate();
  const movies = useSelector((state) => state.movies.researchMovies);
  const dispatch = useDispatch();

  const nextPage = () => {
    navigate(`/results/?movies=${searchMovie}&page=${++pageMovie}`);
  };

  const lastPage = () => {
    navigate(`/results/?movies=${searchMovie}&page=${--pageMovie}`);
  };

  useEffect(() => {
    getQueryMovies(url)
      .then((res) => {
        dispatch(researchMovies(res));
      })
      .catch((err) => console.log(err));
  }, [searchMovie, dispatch, pageMovie, url]);

  return (
    <>
      <div className="flex flex-wrap gap-5 mx-auto justify-center items-center pt-28 max-w-7xl pb-14 relative">
        {movies.results ? (
          movies.results.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        ) : (
          <span className="text-red-500 font-bold text-xl">No result</span>
        )}
      </div>
      <div className="flex justify-between max-w-7xl mx-auto px-12 pb-10">
        {movies.page > 1 && (
          <button
            className="py-2 p-2 bg-gray-50 rounded-lg font-bold"
            onClick={lastPage}
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
        )}
        <span className="font-bold">
          Total results : {movies.total_results}
        </span>
        {movies.total_pages > 1 && movies.page !== movies.total_pages && (
          <button
            className="py-2 p-2 bg-gray-50 rounded-lg font-bold"
            onClick={nextPage}
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        )}
      </div>
    </>
  );
};

export default SearchPage;
