const express = require("express");
const router = express.Router();
const Client = require("../models/Client");

router.get("/getclientPost", async (req, res) => {
  try {
    const client = await Client.find();

    return res.status(200).json({
      message: "data is successfully fetched",
      success: true,
      data: client,
    });
  } catch (error) {
    console.error("❌ Error fetching projects:", error.message);
    return res.status(500).json({
      message: "Server error while fetching clients",
      success: false,
    });
  }
});
module.exports = router;
