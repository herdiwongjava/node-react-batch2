require("dotenv").config();
const mysql = require("mysql2");

const conn = mysql.createPool({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

conn.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
    throw err;
  }
  if (connection) connection.release();
});

module.exports = { conn };
