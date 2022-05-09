const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var userDocument = new mongoose.Schema({
  userId: String,
  document: String,
  noOfCopies: Number,
});
module.exports = new mongoose.model("userDocument", userDocument);
