const express = require("express");
const {
  getDetails,
  activateBundles,
} = require("../controllers/taara.controller.js");
const router = express.Router();

router.get("/details", getDetails);
router.post("/activate", activateBundles);

module.exports = router;
