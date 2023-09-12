const {getAllUsers, getUserById, getUserByEmail,insertUser, updateUser,DeleteUser } = require('../models/Users.js'); 

const { hash, genSalt, compare } = require( "bcrypt") ;
const {sign} = require('jsonwebtoken')
  
module.exports = {
 register: (req, res) => {
    const body = req.body;
    //encrypting the password
    const salt = genSalt(14); 
    body.Password = hash(body.Password, salt);
    insertUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error"
        });
      }
      if (!results) {
        console.log(results);
        return res.status(200).json({
          status:res.statusCode,
          message: "You are now Registered"
        });
      }
      return res.status(200).json({
      status:res.statusCode,
        data: results
      });
    });
  },    // this is the end of the create User
  login: (req, res) => {
    const body = req.body;
    getUserByEmail(body.email, (err, results) => {
      if (err) {
       console.log(err);
        throw err ; 
      }
      if (!results?.length) {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
      const result = compare(body.Password, results.Password);
      if (result) {
        results.Password = undefined;
        const token = sign({ result: results }, {
          expiresIn: "1h"
        });
        return res.json({
          status: res.statusCode,
          message: "login successfully",
          token,
        });
      } else {
        return res.json({
          status: res.statusCode,
          data: "Invalid email or password"
        });
      }
    });
  },
  getUserById: (req, res) => {
    const id = req.params.id;
    getUserById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          status: res.statusCode,
          message: "Record not Found"
        });
      }
      results.password = undefined;
      return res.json({
        status: res.statusCode,
        data: results
      });
    });
  },
getAllUsers: (req, res) => {
 getAllUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        status: res.statusCode,
        data: results
      });
    });
  },
  updateUsers: (req, res) => {
    const body = req.body;
    const salt = genSalt(14);
    body.Password = hash(body.Password, salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        status: res.statusCode,
        message: "updated successfully"
      });
    });
  },
  DeleteUser: (req, res) => {
    const data = req.body;
    DeleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found"
        });
      }
      return res.json({
        status: res.statusCode,
        message: "user deleted successfully"
      });
    });
  }

}
  