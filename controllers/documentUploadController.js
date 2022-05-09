const DocumentUpload = require("../models/documentUploadModel");
var fs = require("fs");
var path = require("path");

exports.getDocuments = async (req, res) => {
  const documentUploads = await DocumentUpload.find();
  res.json(documentUploads);
};

exports.addDocuments = async (req, res) => {
  let dataObj = {
    userId: req.body.userId,
    userName: req.body.userName,
    contactNumber: req.body.contactNumber,
    emailAdress: req.body.emailAddress,
    document: fs.readFileSync(
      path.join(__dirname, "..", "/uploads/", req.file.filename)
    ),
    contentType: "pdf",
    noOfCopies: req.body.noOfCopies,
  };
  DocumentUpload.create(dataObj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        message: "Customer added",
        data: dataObj,
      });
    }
  });
};
