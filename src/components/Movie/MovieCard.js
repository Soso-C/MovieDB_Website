import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { db } from "../../utils/firebase.config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { delFavoriteMovie } from "../../features/movie.slice";

const MovieCard = ({ movie }) => {
  const userinfo = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const favMovies = useSelector((state) => state.movies.favoriteMovies);
  const navigate = useNavigate();
  const location = useLocation();

  const [like, setLike] = useState(false);

  const addFavorite = async () => {
    const userTarget = doc(db, "users", userinfo.email);
    if (userinfo?.email) {
      setLike(!like);
      await updateDoc(userTarget, {
        favoriteMovies: arrayUnion({
          movie,
        }),
      });
    }
  };

  const deleteFavorite = async (movieID) => {
    const userTarget = doc(db, "users", userinfo.email);
    try {
      const result = favMovies.filter((fav) => fav.movie.id !== movieID);
      await updateDoc(userTarget, {
        favoriteMovies: result,
      });
      dispatch(delFavoriteMovie(result));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-between min-w-[220px] w-[220px] h-[360px] p-[0.5rem] rounded-xl bg-slate-600 mb-3 relative">
      <div className="flex flex-col">
        <div
          className="relative h-full w-full cursor-pointer"
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
            alt="img movie"
            className="w-full h-[280px] object-cover rounded-lg"
          />
          <span
            className="bg-black opacity-[0.90] rounded-md
       w-12 text-white px-0.5 flex items-center justify-center z-10 absolute top-[5px] left-[5px]"
          >
            <i className="fa-solid fa-star px-0.5 text-yellow-400"></i>
            {movie?.vote_average}
          </span>
        </div>

        <div className="mt-[0.3em]">
          <h4 className="font-bold text-[1.1em] overflow-hidden whitespace-nowrap text-ellipsis text-white pb-1">
            {movie?.title}
          </h4>
          <div className="flex justify-between items-baseline">
            <p className="text-white font-medium">
              {movie.release_date?.slice(0, 4)}
            </p>
            {location.pathname !== "/favorite" && userinfo !== null ? (
              <button onClick={addFavorite}>
                {like ? (
                  <i className="fa-solid fa-heart text-red-500 hover:scale-150 ease-out delay-75"></i>
                ) : (
                  <i className="fa-solid fa-heart text-white hover:scale-150 hover:text-red-500 ease-out delay-75"></i>
                )}
              </button>
            ) : (
              <button onClick={() => deleteFavorite(movie.id)}>
                <i class="fa-solid fa-trash text-red-500"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
