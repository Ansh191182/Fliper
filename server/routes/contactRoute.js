const express = require("express");
const router = express.Router();
const Contact = require("../models/ContactForm");

// POST: /api/contact/contact
router.post("/contact", async (req, res) => {
  console.log("nody recived");
  console.log(req.body);
  try {
    const { name, email, phone, city } = req.body;
    console.log(req.body);
    if ((!name, !email || !phone || !city)) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const newContact = new Contact({ name, email, phone, city });
    await newContact.save();

    return res.status(201).json({
      message: "✅ Contact form submitted successfully",
      success: true,
    });
  } catch (error) {
    console.error("❌ Error saving contact:", error.message);
    return res.status(500).json({ message: "Server error", success: false });
  }
});

module.exports = router;
