import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../ProjectSection/ProjectCard.module.css";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:8000/getProjects");
        console.log(res.data); // Now you’ll see the full response
        setProjects(res.data.data); // ✅ Fix: extract the actual array
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchProjects();
  }, []);

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
                    : `http://localhost:8000/uploads/${project.image}`
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
