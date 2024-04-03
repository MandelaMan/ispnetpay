const { errorHandler, generateToken } = require("../utils/helperFunctions.js");
const moment = require("moment");
const axios = require("axios");

module.exports = {
  InitiateSTKPush: async (req, res, next) => {
    const { phone, amount } = req.body;

    let user_phone = phone.replace(/^0+/, "");

    const Timestamp = moment().format("YYYYMMDDHHmmss");

    const shortcode = process.env.MPESA_SHORTCODE;

    const passkey = process.env.MPESA_PASS_KEY;

    const password = new Buffer.from(shortcode + passkey + Timestamp).toString(
      "base64"
    );

    let inputs = {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp,
      TransactionType: "CustomerBuyGoodsOnline",
      Amount: amount,
      PartyA: `254${user_phone}`,
      PartyB: shortcode,
      PhoneNumber: `254${user_phone}`,
      CallBackURL: "https://mydomain.com/pat",
      AccountReference: "Test",
      TransactionDesc: "Test",
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .post(
        `https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest`,
        inputs,
        config
      )
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  test: (req, res) => {
    res.json({
      message: "ok",
    });
  },
};
