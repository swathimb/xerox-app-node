const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const xeroxCustomersSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  username: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
  emailAdress: {
    type: String,
  },
});
module.exports = xeroxCustomersSchema;
// module.exports = mongoose.model("xeroxCustomers", xeroxCustomersSchema);
