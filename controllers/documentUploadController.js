const DocumentUpload = require("../models/documentUploadModel");
var fs = require("fs");
var path = require("path");

exports.getDocuments = async (req, res) => {
  const documentUploads = await DocumentUpload.find();
  res.json(documentUploads);
};

exports.addDocuments = (req, res) => {
  console.log(req.body);
  let dataObj = {
    userId: req.body.userId,
    userName: req.body.userName,
    contactNumber: req.body.contactNumber,
    emailAddress: req.body.emailAddress,
    document: fs.readFileSync(
      path.join(__dirname, "..", "/uploads/", req.file.filename)
    ),
    contentType: "pdf",
    noOfCopies: req.body.noOfCopies,
  };
  DocumentUpload.create(dataObj, (err, item) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong",
      });
    } else {
      res.status(200).json({
        message: "Customer added",
        data: dataObj,
      });
    }
  });
};

exports.getSingleDocument = (req, res) => {
  let documentId = req.params.id;
  DocumentUpload.findById({ _id: documentId }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong",
      });
    } else {
      res.status(200).json({
        message: "Document found",
        data,
      });
    }
  });
};

exports.updateDocument = async (req, res) => {
  let documentId = req.params.id;
  let dataObj = req.body;
  if (req.file?.filename) {
    dataObj = {
      document: fs.readFileSync(
        path.join(__dirname, "..", "/uploads/", req.file.filename)
      ),
    };
  }
  await DocumentUpload.findByIdAndUpdate(
    { _id: documentId },
    { $set: dataObj },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: "Something went wrong",
        });
      } else {
        res.status(200).json({
          message: "Document updated",
        });
      }
    }
  );
};

exports.deleteDocument = async (req, res) => {
  let documentId = req.params.id;
  await DocumentUpload.deleteOne({ _id: documentId }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong",
      });
    } else {
      res.status(200).json({
        message: "Document delete",
      });
    }
  });
};
