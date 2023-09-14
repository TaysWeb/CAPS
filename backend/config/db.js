const {createPool} =require( 'mysql');
require('dotenv/config')

const db = createPool({
    host: process.env.DB_HOST ,
    user : process.env.DB_USER,
    password : process.env.DB_PASS, 
    database : process.env.DB_NAME,
    connectionLimit : 55
}) 
db.getConnection((err) => {
  if (err) throw err ;   
  console.log("Database Connected successfully!")
});

module.exports = db;