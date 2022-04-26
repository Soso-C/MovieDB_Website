import React, { useEffect } from "react";

const MovieCard = ({ movie }) => {

    useEffect(()=>{

    },[])

  return (
    <div className="flex flex-col justify-between min-w-[220px] w-[220px] h-[220px] p-4 rounded-xl bg-slate-600 mb-3">
      <span className="bg-black rounded-md
       w-12 text-white px-0.5 flex items-center justify-center">
        <i class="fa-solid fa-star px-0.5 text-yellow-400"></i>
        {movie.vote_average}
      </span>
      <div>
        <h4 className="font-bold text-md overflow-hidden whitespace-nowrap text-ellipsis">{movie.title}</h4>
        <p>{movie.release_date.slice(0,4)}</p>
        <div className="flex justify-between items-baseline">
          <button className="px-[10px] py-[5px] bg-gray-200 rounded-lg mt-2 font-medium">Details</button>
          <button>
            <i className="fa-solid fa-heart text-red-500"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
