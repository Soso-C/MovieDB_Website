import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase.config";

export default function Navbar() {
  const [search, setSearch] = useState("");

  let navigate = useNavigate();
  const userinfo = useSelector((state) => state.user.user);

  const handleLogout = async () => {
    await signOut(auth).then((logout) => {
      navigate("/login");
    });
  };

  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <nav className="fixed top-0 w-full bg-zinc-900 items-center flex p-4 z-20">
      <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap md:max-w-7xl md:mx-auto">
        <Link
          to={"/"}
          className="hidden md:flex text-xl text-white font-bold cursor-pointer"
        >
          Logo
        </Link>

        <button
          className="flex justify-end md:hidden ring-1 ring-white rounded"
          onClick={showNav}
        >
          <i className="fas fa-bars text-white w-9 h-9 flex justify-center items-center"></i>
        </button>

        <form
          onSubmit={handleSubmit}
          className="w-auto mx-auto max-w-[80%] h-10 bg-gray-200 border border-gray-300 text-sm rounded-full flex"
        >
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 w-full rounded-l-full rounded-r-full text-sm focus:outline-none"
          />
          <i
            className="fas fa-search m-3 text-lg text-gray-700 w-4 h-4 flex items-center justify-center cursor-pointer"
            onClick={handleSubmit}
          ></i>
        </form>
        {!userinfo ? (
          <div
            className={`${
              toggle ? " flex" : " hidden"
            } md:flex md:flex-row-reverse justify-center items-center flex-col-reverse w-full mt-5 h-full md:h-auto md:mt-0 md:w-auto`}
          >
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
          </div>
        ) : (
          <div
            className={`${
              toggle ? " flex" : " hidden"
            } md:flex md:flex-row-reverse justify-center items-center flex-col-reverse w-full mt-5 h-full md:h-auto md:mt-0 md:w-auto`}
          >
            <button
              className="text-red-600 text-center font-medium bg-white px-4 py-2 m-2 cursor-pointer rounded-md hover:bg-gray-200 p-1 mt-6 md:mt-0 md:m-0"
              onClick={handleLogout}
            >
              Logout
              <i className="fa-solid fa-arrow-right-from-bracket ml-2"></i>
            </button>
            <Link
              className="text-md text-white font-bold mr-2 p-3 w-full md:w-auto border-b flex justify-center md:border-none"
              to={"/"}
            >
              Profil
            </Link>
            <Link
              to={"/favorite"}
              className="text-md text-white font-bold mr-2 p-3 w-full md:w-auto border-t border-b flex justify-center md:border-none"
            >
              Favorite
            </Link>
            <Link
              to={"/"}
              className="text-md text-white font-bold mr-2 md:hidden p-3 border-t w-full flex justify-center"
            >
              Home
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
