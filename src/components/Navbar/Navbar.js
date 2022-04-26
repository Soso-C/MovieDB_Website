import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  let navigate = useNavigate();

  return (
    <div className="bg-gray-900 w-full">
      <nav className="max-w-7xl mx-auto flex flex-row items-center p-3 justify-between shadow-xs border-b-2 border-b-slate-900 h-[100px] font-mserrat">
        <h1 className="mr-1 text-white font-bold md:text-lg">SCMovie</h1>
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
          <button
            className="text-indigo-800 text-center font-medium bg-white px-4 py-2 m-2 cursor-pointer rounded-md hover:bg-gray-200"
            onClick={navigate("/login")}
          >
            Sign In
          </button>
          <button
            className="text-indigo-800 text-center font-medium bg-white px-4 py-2 m-2 cursor-pointer rounded-md hover:bg-gray-200"
            onClick={navigate("/register")}
          >
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
}
