import React from "react";
import { Navigate } from "react-router-dom"; // ✅ required import

const ProtectedRoute = ({ element }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return isAdmin ? element : <Navigate to="/admin" />;
};

export default ProtectedRoute;
