import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const userinfo = useSelector((state) => state.user.user);
  console.log(userinfo);
  return <div className="bg-slate-800 h-screen w-full"></div>;
};

export default Home;
