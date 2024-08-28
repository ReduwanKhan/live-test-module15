const express = require("express");
const multer = require("multer");

const app = express();

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

// Set up the upload route
app.post("/upload", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    res.send("File uploaded successfully: " + req.file.filename);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
