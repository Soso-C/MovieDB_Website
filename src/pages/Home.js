import React, { useEffect } from "react";
import { getUser } from "../api/movies";
import PopularMovie from "../components/Movie/PopularMovie";
import TopRated from "../components/Movie/TopRated";

const Home = () => {
  useEffect(() => {
    getUser();
  });

  return (
    <div className="bg-slate-800 h-full w-full pb-10">
      <TopRated />
      <PopularMovie />
    </div>
  );
};

export default Home;
