import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../api/movies";

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_TMDB_KEY}&language=fr-FR`;

  useEffect(() => {
    getMovieById(url)
      .then((res) => {
        setMovie(res);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="bg-gray-300 rounded-lg w-[60%] justify-center items-center flex h-[550px]">
        <div className="w-1/3 h-full rounded-l-lg">
          <div className="h-full">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="rounded-l-lg h-full w-full"
              alt="affiche film"
            />
          </div>
        </div>
        <div className="w-2/3 h-full flex-col justify-between">
          <div className="flex justify-center items-center mb-12 mt-6">
            <h2 className="font-bold text-3xl text-black text-center">
              {movie.title}
            </h2>
            <span className="text-blue-600 text-xl ml-3 font-medium">
              {movie.vote_average}
              <i className="fa-solid fa-star px-0.5 text-yellow-400"></i>
            </span>
          </div>
          <p className="px-6 font-bold text-xl mb-6">Synopsis :</p>
          <p className="font-medium px-8">{movie.overview}</p>
          <p className="px-6 font-bold text-xl mt-6">
            Date : {movie.release_date?.slice(0, 4)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
