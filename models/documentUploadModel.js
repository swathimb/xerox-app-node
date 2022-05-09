const mongoose = require("mongoose");

const documentUploadSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  contactNumber: Number,
  emailAddress: String,
  document: Buffer,
  contentType: String,
  noOfCopies: Number,
});
module.exports = new mongoose.model("documentUpload", documentUploadSchema);
