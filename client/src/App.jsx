import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget this
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import EnterPage from "./components/EnterPage/EnterPage";
import PostProject from "./components/Adminacess/PostProject";
import PostClient from "./components/Adminacess/PostClient";
import Contact from "./components/Adminacess/Contact";
import GetClient from "./components/Adminacess/GetClient";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/EnterPage"
            element={<ProtectedRoute element={<EnterPage />} />}
          />
          <Route
            path="/postProject"
            element={<ProtectedRoute element={<PostProject />} />}
          />
          <Route
            path="/postclient"
            element={<ProtectedRoute element={<PostClient />} />}
          />
          <Route
            path="/contact"
            element={<ProtectedRoute element={<Contact />} />}
          />
          <Route
            path="/getClient"
            element={<ProtectedRoute element={<GetClient />} />}
          />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="dark"
      />
      <Footer />
    </>
  );
};

export default App;
