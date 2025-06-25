const express = require("express");
const router = express.Router();
const Project = require("../models/project");
// GET route to fetch all projects
router.get("/getProjects", async (req, res) => {
  try {
    const projects = await Project.find();
    return res.status(200).json({
      message: "Projects fetched successfully",
      success: true,
      data: projects,
    });
  } catch (error) {
    console.error("❌ Error fetching projects:", error.message);
    return res.status(500).json({
      message: "Server error while fetching projects",
      success: false,
    });
  }
});
module.exports = router;
