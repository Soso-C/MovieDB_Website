import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMoviesToStore } from "../features/movie.slice";

const Home = () => {
  const userinfo = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const movieInfo = useSelector((state) => state.movies.movies);
  console.log(movieInfo);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_TMDB_KEY}&language=fr-Fr&page=1`)
      .then((res) => {
        dispatch(addMoviesToStore(res.data))
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(userinfo);
  return (
    <div className="bg-slate-800 h-screen w-full">
      <h2 className="text-center text-3xl">Top rated</h2>
    </div>
  );
};

export default Home;
