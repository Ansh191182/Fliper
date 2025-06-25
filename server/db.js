const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

function db() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("✅ Database is successfully connected");
    })
    .catch((error) => {
      console.error("❌ Database connection failed:", error.message);
    });
}

module.exports = db;
