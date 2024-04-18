const express = require("express");
const paymentRoutes = require("./routes/payment.route");
const taaraRoutes = require("./routes/taara.route");
const cookieParser = require("cookie-parser");
const path = require("path");
var cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());
const corsConfig = {
  origin: "",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsConfig));
app.options("", cors(corsConfig));

app.listen(3000, () => {
  console.log("Server is up and running " + process.env.APP_PORT);
});

const ___dirname = path.resolve();

app.use(express.static(path.join(___dirname, "/public")));

app.use("/api/taarashare", taaraRoutes);
app.use("/api/pay", paymentRoutes);

// app.get("/api/data", (req, res) => {
//   res.json({ message: "Hello from API!" });
// });

//This middleware allows us to catch all errors and report
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
