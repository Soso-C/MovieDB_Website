import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase.config";
export default function Navbar() {
  let navigate = useNavigate();
  const userinfo = useSelector((state) => state.user.user);

  const handleLogout = async () => {
    await signOut(auth).then((logout) => {
      navigate("/login");
    });
  };

  return (
    <div className="bg-gray-900 w-full">
      <nav className="max-w-7xl mx-auto flex flex-row items-center p-3 justify-between shadow-xs border-b-2 border-b-slate-900 h-[100px] font-mserrat">
        <Link to={"/"}>
          <h1 className="mr-1 text-white font-bold md:text-lg">SCMovie</h1>
        </Link>
        <div className="w-36 md:w-1/4 h-10 bg-gray-200 border border-gray-300 text-sm rounded-full flex">
          <input
            type="search"
            placeholder="Search"
            className="px-4 w-full rounded-l-full rounded-r-full text-sm focus:outline-none"
          />
          <i className="fas fa-search m-3 text-lg text-gray-700 w-4 h-4 flex items-center justify-center"></i>
        </div>
        <button className="flex flex-row-reverse mr-4 ml-4 md:hidden">
          <i className="fas fa-bars text-white w-10 h-10 flex justify-center items-center"></i>
        </button>
        <div className="flex flex-row-reverse hidden md:flex">
          {userinfo === null ? (
            <>
              <button
                className="text-indigo-800 text-center font-medium bg-white px-4 py-2 m-2 cursor-pointer rounded-md hover:bg-gray-200"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
              <button
                className="text-indigo-800 text-center font-medium bg-white px-4 py-2 m-2 cursor-pointer rounded-md hover:bg-gray-200"
                onClick={() => navigate("/register")}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              <button
                className="text-red-600 text-center font-medium bg-white px-4 py-2 m-2 cursor-pointer rounded-md hover:bg-gray-200"
                onClick={handleLogout}
              >
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
              <button
                className="text-indigo-800 text-center font-medium bg-white px-4 py-2 m-2 cursor-pointer rounded-full hover:bg-gray-200"
                onClick={() => navigate("/")}
              >
                <i class="fa-solid fa-user"></i>
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
