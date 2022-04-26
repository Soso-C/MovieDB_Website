import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const MovieCard = ({ movie }) => {
  const userinfo = useSelector((state) => state.user.user);
  useEffect(() => {}, []);

  console.log(movie.poster_path);
  return (
    <div className="flex flex-col justify-between min-w-[220px] w-[220px] h-[360px] p-4 rounded-xl bg-slate-600 mb-3 relative">
      <div className="flex flex-col">
        <div className="relative h-full w-full">
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt="img movie"
            className="w-full h-[280px] object-cover rounded-lg"
          />
          <span
            className="bg-black opacity-[0.90] rounded-md
       w-12 text-white px-0.5 flex items-center justify-center z-10 absolute top-[5px] left-[5px]"
          >
            <i class="fa-solid fa-star px-0.5 text-yellow-400"></i>
            {movie.vote_average}
          </span>
        </div>

        <div className="z-10">
          <h4 className="font-bold text-xl overflow-hidden whitespace-nowrap text-ellipsis text-white">
            {movie.title}
          </h4>
          <div className="flex justify-between items-baseline">
            <p className="text-white">{movie.release_date.slice(0, 4)}</p>
            {userinfo !== null ? (
              <button>
                <i className="fa-solid fa-heart text-red-500 hover:scale-150 ease-out delay-75"></i>
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
