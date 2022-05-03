const express = require("express");
const xeroxController = require("../controllers/xeroxController");

const router = express.Router();

router.get("/getCustomers", xeroxController.getCustomers);
router.post("/addCustomer", xeroxController.addCustomer);

module.exports = router;
