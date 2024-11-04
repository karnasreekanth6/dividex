const express = require('express');
const mysql = require('mysql2');
const dotenv = require("dotenv");
const {pool} = require('./db');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;



app.get('/customers', async (req, res) => {

  try {
    const [result] = await pool.query('SELECT * FROM customer');
    return res.send({success : true,result : result});
   // return result[0];
  } catch (error) {
    return res.send({success : false,error : error.message});
  }

  
 // res.send("HELLO")
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});