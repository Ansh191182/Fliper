const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

router.post("/admin", async (req, res) => {
  try {
    const { ADMIN_KEY } = req.body;

    if (!ADMIN_KEY) {
      return res
        .status(400)
        .json({ error: "Admin key is required", success: false });
    }

    if (ADMIN_KEY === process.env.ADMIN_KEY) {
      return res
        .status(200)
        .json({ message: "✅ Access granted", success: true });
    } else {
      return res.status(401).json({ error: "❌ Invalid key", success: false });
    }
  } catch (error) {
    console.error("❌ Error checking admin key:", error.message);
    return res.status(500).json({ error: "Server error", success: false });
  }
});

module.exports = router;
