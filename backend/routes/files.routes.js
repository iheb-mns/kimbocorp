module.exports = (app) => {
  const company = require("../controllers/files.controller.js");
  var router = require("express").Router();
  const multer = require('multer');

  //Upload PDF files
  const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "files");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
    },
  });

  // Multer Filter
  const multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "pdf") {
      cb(null, true);
    } else {
      cb(new Error("Not a PDF File!!"), false);
    }
  };

  const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
  });

  // Create a new Company
  router.post("/", upload.single("file"), company.create);

  app.use("/api/files", router);
};
