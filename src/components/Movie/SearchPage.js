import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { researchMovies } from "../../features/movie.slice";
import { getQueryMovies } from "../../api/movies";

const SearchPage = () => {
  const params = useParams();
  const movies = useSelector((state) => state.movies.researchMovies);
  const dispatch = useDispatch();
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_TMDB_KEY}&language=fr-Fr&query=${params.query}&page=1&include_adult=false`;

  useEffect(() => {
    getQueryMovies(url)
      .then((res) => {
        dispatch(researchMovies(res));
      })
      .catch((err) => console.log(err));
  }, [params, dispatch, url]);

  return (
    <div className="flex flex-wrap gap-5 mx-auto justify-center items-center pt-28 max-w-7xl pb-12">
      {movies ? (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      ) : (
        <span className="text-red-500 font-bold text-xl">Rien trouvé !</span>
      )}
    </div>
  );
};

export default SearchPage;
