const express = require("express");
const router = express.Router();
const Project = require("../models/project");
const upload = require("../middleware/multer");

// POST route to add a new project
router.post("/projectPost", upload.single("image"), async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file?.path; // ✅ Image URL from Cloudinary

    if (!image || !name || !description) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const newProject = new Project({
      image,
      name,
      description,
    });

    await newProject.save(); // ✅ Add await

    return res
      .status(201)
      .json({ message: "✅ Project successfully stored", success: true });
  } catch (error) {
    console.error("❌ Error saving project:", error.message);
    return res.status(500).json({ message: "Server error", success: false });
  }
});

module.exports = router;
