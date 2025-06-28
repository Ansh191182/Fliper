import React from "react";
import { useNavigate } from "react-router-dom";

const EnterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 px-4 py-10 space-y-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Admin Dashboard</h2>

      <button
        onClick={() => navigate("/AddProject")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl w-60 shadow-md transition"
      >
        ➕ Add Project
      </button>

      <button
        onClick={() => navigate("/AddClient")}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl w-60 shadow-md transition"
      >
        🧑‍💼 Add Client
      </button>

      <button
        onClick={() => navigate("/showContact")}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl w-60 shadow-md transition"
      >
        💬 Show Messages
      </button>
    </div>
  );
};

export default EnterPage;
