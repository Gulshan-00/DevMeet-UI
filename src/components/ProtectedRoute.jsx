import React from "react";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user); // from Redux store

  // If user is not logged in, redirect to login page
  if (!user || !user.firstName) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the requested route
  return children;
};

export default ProtectedRoute;
