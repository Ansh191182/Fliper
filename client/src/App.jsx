import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminPannel from "./pages/AdminPannel";
import EnterPage from "./component/EnterPage";
import AddProject from "./component/AddProject";
import AddClient from "./component/AddClient";
import ShowMessage from "./component/ShowMessage";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminPannel />} />

          {/* ✅ All protected routes inside Routes */}
          <Route
            path="/EnterPage"
            element={<ProtectedRoute element={<EnterPage />} />}
          />
          <Route
            path="/AddProject"
            element={<ProtectedRoute element={<AddProject />} />}
          />
          <Route
            path="/AddClient"
            element={<ProtectedRoute element={<AddClient />} />}
          />
          <Route
            path="/showContact"
            element={<ProtectedRoute element={<ShowMessage />} />}
          />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
