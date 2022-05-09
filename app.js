const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const userSchema = new mongoose.Schema({}, { strict: false });

let Users = mongoose.model("users", userSchema);

const routes = require("./routers/documentUploadRouters");

app.use("/", routes);

app.get("/users", async (req, res) => {
  const users = await Users.find();
  res.json(users);
});

module.exports = app;
