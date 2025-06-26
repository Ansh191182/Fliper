import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../ProjectSection/ProjectCard.module.css";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);

  // 🧠 Dynamic base URL
  const BASE_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:8000"
      : "https://fliper-1-uzjb.onrender.com";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/getProjects`);
        console.log(res.data);
        setProjects(res.data.data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchProjects();
  }, [BASE_URL]);

  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.heading}>Our Project Section</h2>

      <div className={styles.cardWrapper}>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div className={styles.card} key={project._id}>
              <img
                src={
                  project.image.startsWith("http")
                    ? project.image
                    : `${BASE_URL}/uploads/${project.image}`
                }
                alt={project.name}
              />
              <h4>{project.name}</h4>
              <button>Read More</button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>Loading projects...</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
