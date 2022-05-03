const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const userDocumentsSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  documentId: {
    type: String,
  },
  documentToPrint: {
    type: Blob,
  },
  numberOfCopies: {
    type: Number,
  },
});

module.exports = mongoose.model("userDocuments", userDocumentsSchema);
