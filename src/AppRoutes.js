import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/modalConnect/Login/Login";
import SignUp from "./components/modalConnect/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import FavoriteMovie from "./components/Movie/FavoriteMovie";
import MovieDetail from "./pages/MovieDetail";
import SearchPage from "./components/Movie/SearchPage";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/register" && location.pathname !== "/login" ? (
        <Navbar />
      ) : null}
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route
          path="/favorite"
          element={
            <ProtectedRoutes>
              <FavoriteMovie />
            </ProtectedRoutes>
          }
        />

        <Route path="/results" element={<SearchPage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
