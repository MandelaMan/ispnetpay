const { errorHandler, generateToken } = require("../utils/helperFunctions.js");
const moment = require("moment");
const axios = require("axios");
const fs = require("fs");

const readJsonFromFile = (file_location, cb) => {
  fs.readFile(file_location, "utf-8", (err, jsonString) => {
    if (err) {
      return cb && cb(err);
    }

    try {
      const data = JSON.parse(jsonString);
      return cb && cb(null, data);
    } catch (error) {
      return cb && cb(err);
    }
  });
};

module.exports = {
  activateBundles: (req, res) => {
    const { mac_address } = req.body;

    readJsonFromFile("./dbSimulation.json", (err, data) => {
      if (err) {
        console.log(err);
      }

      const updatedBundles = data.map((device) => {
        if (device.mac_address === mac_address) {
          return {
            ...device,
            bundle: {
              ...device.bundle,
              is_active: false,
            },
          };
        }

        return device;
      });

      fs.writeFile(
        "./dbSimulation.json",
        JSON.stringify(updatedBundles, null, 2),
        (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).json({
              message: "ok",
            });
          }
        }
      );
    });
  },
  getDetails: (req, res) => {
    try {
      if (req.params.id) {
        readJsonFromFile("./dbSimulation.json", (err, data) => {
          if (err) {
            console.log(err);
          }

          let details = data.filter((d) => d.user_id === req.params.id)[0];

          res.status(200).json(details);
        });
      }
    } catch (error) {
      console.log("Error is " + error);
    }
  },
  test: (req, res) => {
    res.json({
      message: "ok",
    });
  },
};
