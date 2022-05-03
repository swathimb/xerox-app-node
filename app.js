const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({}, { strict: false });

let Users = mongoose.model("users", userSchema);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.get("/users", async (req, res) => {
  const users = await Users.find();
  res.json(users);
});

module.exports = app;
