const { createPool } = require("mysql");

const pool = createPool({
  port: process.env.DB_PORT,
  host: "sql6.freesqldatabase.com",
  user: "sql6679409",
  password: "mCVqTGThbN",
  database: "sql6679409",
  connectionLimit: 10,
});

module.exports = pool;
