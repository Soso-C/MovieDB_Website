import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children }) => {
  const userAuth = useSelector((state) => state.user.user);

  if (!userAuth) return <Navigate to={"/"} replace />;
  return children;
};

export default ProtectedRoutes;
