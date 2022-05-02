import React from "react";

const MovieDetail = ({ movie }) => {
  return (
    <div className="h-screen w-full">
      <div className="bg-gray-300 rounded-lg max-w-7xl mt-10 mx-auto justify-center items-center flex h-[600px]">
        <div className="w-1/3 h-full rounded-l-lg">
          <div className="h-full">
            <img
              src="https://image.tmdb.org/t/p/w500/xqfTE9FjwD5vS1A6QnyoMdPQUvh.jpg"
              className="rounded-l-lg h-full w-full"
              alt="affiche film"
            />
          </div>
        </div>
        <div className="w-2/3 h-full flex-col justify-between">
          <div className="flex justify-center items-center">
            <h2 className="font-bold text-3xl text-blue-700 text-center">
              Les Evades
            </h2>
            <span className="text-black text-xl ml-2 font-medium">
              7.8
              <i className="fa-solid fa-star px-0.5 text-yellow-400"></i>
            </span>
          </div>
          <h2>tedt</h2>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
