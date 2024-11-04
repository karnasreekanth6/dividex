require('dotenv').config();
const mysql = require("mysql2/promise");
var pool = mysql.createPool(
  {
  host: process.env.LOCAL_DB_HOST,
  user: process.env.LOCAL_DB_USER_NAME,
  password: process.env.LOCAL_DB_PASSWORD,
  database: process.env.LOCAL_DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // Adjust based on your server capacity
  queueLimit: 0, // Unlimited queue
  // connectionLimit: 10,
  // timeout: 60 * 60 * 1000,
  // waitForConnections: true,
  
}
);
console.log(process.env.LOCAL_DB_NAME);
module.exports = { pool };