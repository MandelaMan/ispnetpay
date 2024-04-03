const express = require("express");
const paymentRoutes = require("./routes/payment.route");
const cookieParser = require("cookie-parser");
const path = require("path");
var cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(3000, () => {
  console.log("Server is up and running " + process.env.APP_PORT);
});

// app.get("/api/data", (req, res) => {
//   res.json({ message: "Hello from API!" });
// });

app.use("/api/pay", paymentRoutes);

const ___dirname = path.resolve();

app.use(express.static(path.join(___dirname, "/public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(___dirname, "public", "index.html"));
});

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
