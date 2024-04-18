const { errorHandler, generateToken } = require("../utils/helperFunctions.js");
const moment = require("moment");
const axios = require("axios");

module.exports = {
  activateBundles: (req, res) => {
    //Would mimick a call to Taarashare API
    let data = {
      mac_address: "00-B0-D0-63-C2-26",
      bundle_id: "D45123",
    };

    res.status(200).json(data);
  },
  getDetails: (req, res) => {
    //Wouuld mimick a call to Taarashare API
    let data = {
      bundle: {
        id: "Tyr56l9",
        is_active: false,
        unused: 559,
      },
      mac_address: "00-B0-D0-63-C2-26",
      venue_id: "D45123",
    };

    res.status(200).json(data);
  },
  test: (req, res) => {
    res.json({
      message: "ok",
    });
  },
};
