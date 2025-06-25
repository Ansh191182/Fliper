const express = require("express");
const router = express.Router();
const Client = require("../models/Client");
const upload = require("../middleware/multer");

// POST route to add client
router.post("/clientPost", upload.single("image"), async (req, res) => {
  try {
    const { name, description, designation } = req.body;
    const image = req.file?.path;

    if (!name || !description || !designation || !image) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const newClient = new Client({
      name,
      description,
      designation,
      image,
    });

    await newClient.save();

    return res
      .status(201)
      .json({ message: "✅ Client successfully added", success: true });
  } catch (error) {
    console.error("❌ Error adding client:", error.message);
    return res
      .status(500)
      .json({ message: "Server error while adding client", success: false });
  }
});
module.exports = router;
