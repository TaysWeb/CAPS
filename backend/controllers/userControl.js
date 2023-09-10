import  { getAllUsers,getUserById, getUserByEmail,updateUser,DeleteUser} from '../models/Users.js'; 

const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
  

  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  }
  login: (req, res) => {
    const body = req.body;
    getUserByEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const token = sign({ result: results }, {
          expiresIn: "1h"
        });
        return res.json({
          success: 1,
          message: "login successfully",
          token,
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
    });
  }
  getUserById: (req, res) => {
    const id = req.params.id;
    getUserById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found"
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results
      });
    });
  }
  getAllUsers: (req, res) => {
    getAllUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: res.status(500),
        data: results
      });
    });
  }
  updateUsers: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully"
      });
    });
  }
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
        success: res.status(500),
        message: "user deleted successfully"
      });
    });
  }

  export default 
    {getAllUsers,getUserById,getUserByEmail,updateUser,DeleteUser} ;
  