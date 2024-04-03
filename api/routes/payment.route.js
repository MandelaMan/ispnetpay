const express = require("express");
const {
  test,
  InitiateSTKPush,
} = require("../controllers/payment.controller.js");
const { generateToken } = require("../utils/helperFunctions.js");

const router = express.Router();

router.get("/test", test);
router.post("/stk", generateToken, InitiateSTKPush);

module.exports = router;
