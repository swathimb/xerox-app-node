const express = require("express");
const documentUploadController = require("../controllers/documentUploadController");
var multer = require("multer");

const router = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

router.get("/getDocuments", documentUploadController.getDocuments);
router.post(
  "/addDocument",
  upload.single("file"),
  documentUploadController.addDocuments
);

module.exports = router;
