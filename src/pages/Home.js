import React from "react";
import PopularMovie from "../components/Movie/PopularMovie";
import TopRated from "../components/Movie/TopRated";

const Home = () => {
  return (
    <div className="h-full w-full pb-10 bg-slate-800">
      <TopRated />
      <PopularMovie />
    </div>
  );
};

export default Home;
