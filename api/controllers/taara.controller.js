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

    const getRandomInt = (min, max) => {
      // Ensure min and max are integers
      min = Math.ceil(min);
      max = Math.floor(max);
      // Generate a random integer between min and max (inclusive)
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let data = {
      bundle: {
        id: "Tyr56l9",
        is_active: false,
        unused: getRandomInt(1, 10000),
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
