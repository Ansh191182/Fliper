import React, { useEffect, useState } from "react";
import axios from "axios";

const OurProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    try {
      const res = await axios.get(
        "https://fliper-1-uzjb.onrender.com/getProjects"
      );
      console.log("Render Data:", res.data);

      // ✅ Extract correct array
      const data = Array.isArray(res.data.data) ? res.data.data : [];

      setProjects(data);
    } catch (err) {
      try {
        const fallback = await axios.get("http://localhost:8000/getProjects");
        console.log("Localhost Data:", fallback.data);

        const data = Array.isArray(fallback.data.data)
          ? fallback.data.data
          : [];
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      {/* Static Header */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Our Project</h1>
        <p className="text-gray-600 text-lg">
          Our recent house project stands as a testament to modern design,
          sustainable materials, and customer-focused planning. From initial
          consultation to final handover, we combined aesthetics with
          functionality—creating a living space that not only looks elegant but
          also adapts to everyday needs.
        </p>
      </div>

      {/* Project Cards */}
      {loading ? (
        <p className="text-center text-gray-500 text-xl">Loading...</p>
      ) : projects.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">No projects found.</p>
      ) : (
        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-sm bg-white rounded-xl shadow-md p-4 flex-shrink-0"
              >
                <img
                  src={
                    project.image && project.image.startsWith("http")
                      ? project.image
                      : "https://via.placeholder.com/300x200.png?text=No+Image"
                  }
                  alt={project.name || "Project image"}
                  className="h-48 w-full object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {project.name || "Untitled Project"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description ||
                    "This project does not have a description yet."}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OurProject;
