import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/modalConnect/Login/Login";
import SignUp from "./components/modalConnect/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
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
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
