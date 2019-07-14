const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

router.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "error.html"));
});
module.exports = router;
