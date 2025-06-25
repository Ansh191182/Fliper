const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config");
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "flipr-project",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
    resource_type: "image",
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
