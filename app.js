const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userSchema = new mongoose.Schema({}, { strict: false });

let Users = mongoose.model("users", userSchema);

const routes = require("./routers/xeroxRouters");

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.get("/users", async (req, res) => {
  const users = await Users.find();
  res.json(users);
});

module.exports = app;
