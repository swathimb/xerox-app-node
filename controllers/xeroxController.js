const mongoose = require("mongoose");
const xeroxCustomersSchema = require("../models/xeroxCustomer");
const XeroxCustomers = mongoose.model("xeroxCustomers", xeroxCustomersSchema);

exports.getCustomers = async (req, res) => {
  const xeroxCustomers = await XeroxCustomers.find();
  res.json(xeroxCustomers);
};

exports.addCustomer = async (req, res) => {
  console.log("===========", req.body);

  await new XeroxCustomers(req.body).save((err, data) => {
    console.log("===========", req.body);

    if (err) {
      res.status(500).json({
        message: "Oopss! Something went wrong",
      });
    } else {
      res.status(200).json({
        message: "Customer added",
        data,
      });
    }
  });
};
