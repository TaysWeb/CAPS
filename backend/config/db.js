const {createPool} = require('mysql');
require('dotenv').config();

const db = createPool({
    host: process.env.DB_HOST ,
    user : process.env.DB_USER,
    password : process.env.DB_PASS, 
    database : process.env.DB_NAME,
    port : process.env.DB_PORT, 
    connectionLimit : 55
}) 
db.getConnection((err) => {
   if (err) {
    console.log(err) ;
    console.log("DB_URL:", process.env.DB_URL);
   } else {
    console.log("Database Connected Successfully")
   }
});

module.exports = db;