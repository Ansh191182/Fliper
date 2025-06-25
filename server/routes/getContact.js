const express = require("express");
const router = express.Router();
const Contact = require("../models/ContactForm");

// GET: fetch all contact form submissions
router.get("/getcontact", async (req, res) => {
  try {
    const allContacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({
      message: " Contact form data fetched successfully",
      success: true,
      data: allContacts,
    });
  } catch (error) {
    console.error(" Error fetching contacts:", error.message);
    return res.status(500).json({
      message: "Server error while fetching contact data",
      success: false,
    });
  }
});

module.exports = router;
