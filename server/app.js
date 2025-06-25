const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db");
const cors = require("cors");

app.use(cors());

// Connect to DB
db();

// Middleware for parsing
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

// Default route
app.get("/", (req, res) => {
  return res.send("<h1>Radhe Radhe Jai Shree Krishn 🙏</h1>");
});

// Routes import
const ProjectPost = require("./routes/ProjectPost");
const getPostProject = require("./routes/getProject");
const postClient = require("./routes/clientPost");
const getClient = require("./routes/getClientPost");
const contact = require("./routes/contactRoute");
const getContact = require("./routes/getContact");
const admin = require("./routes/adminRoute");

// Use APIs — YOUR LOGIC (No prefix, all flat)
app.use("/", ProjectPost);
app.use("/", getPostProject);
app.use("/", postClient);
app.use("/", getClient);
app.use("/", contact);
app.use("/", getContact);
app.use("/", admin);
// Start server
app.listen(PORT, () => {
  console.log(`✅ App is successfully running on port no. ${PORT}`);
});
