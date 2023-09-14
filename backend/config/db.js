const  {createPool} =require( 'mysql');
require('dotenv/config')

const connection = createPool({
    host: process.env.DB_HOST ,
    user : process.env.DB_USER,
    password : process.env.DB_PASS, 
    database : process.env.DB_NAME,
    connectionLimit : 55
}) 
connection.getConnection((err) => {
  if (err)  throw err 
     console.log("Database connection error:", err);
      
  console.log("Database Connected successfully!");
});

module.exports = connection ;