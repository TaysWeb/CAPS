const  {createPool} =require( 'mysql');
require('dotenv/config')

const connection = createPool ({
    host: process.env.DB_HOST ,
    user : process.env.DB_USER,
    password : process.env.DB_PASS, 
    database : process.env.DB_NAME,
    connectionLimit : 60
}) 
connection.getConnection((err) => {
  if (err) {
     console.error("Database connection error:", err);
     throw err;
  } 
  console.log("Database Connected successfully!");
});

module.exports = connection ;