const mongoose = require("mongoose");

require("dotenv").config({ path: ".env" });

mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  console.log(`Database connection error ${err.message}`);
});

require("./models/documentUploadModel");
const app = require("./app");

const server = app.listen(3000, () => {
  console.log(`Express running on port ${server.address().port}`);
});
