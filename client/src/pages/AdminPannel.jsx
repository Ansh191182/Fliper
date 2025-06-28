import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const AdminPannel = () => {
  const [adminKey, setAdminKey] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // 👈 navigation hook

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!adminKey) return toast.error("Please enter admin key");

    setLoading(true);

    const payload = { ADMIN_KEY: adminKey };
    const renderURL = "https://fliper-1-uzjb.onrender.com/admin";
    const localURL = "http://localhost:8000/admin";

    try {
      const res = await axios.post(renderURL, payload);
      if (res.status === 200) {
        toast.success("Admin access granted (Render)");
        localStorage.setItem("isAdmin", "true"); // ✅ Fixed localStorage
        navigate("/EnterPage"); // ✅ Navigate after success
      } else {
        toast.error("Invalid Admin Key");
      }
    } catch (renderErr) {
      try {
        const localRes = await axios.post(localURL, payload);
        if (localRes.status === 200) {
          toast.success("Admin access granted (Localhost)");
          localStorage.setItem("isAdmin", "true");
          navigate("/EnterPage");
        } else {
          toast.error("Invalid Admin Key (Localhost)");
        }
      } catch (localErr) {
        toast.error("Server Error: Admin verification failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">
          Admin Panel
        </h2>

        <div>
          <label className="block text-gray-700 mb-1">Enter Admin Key</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Admin Key"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
              onClick={handleToggle}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-md text-white font-semibold ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Verifying..." : "Login as Admin"}
        </button>
      </form>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default AdminPannel;
