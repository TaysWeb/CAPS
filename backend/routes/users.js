
// import express
const express = require("express");
const bodyParser = require('body-parser');
  
const {register, getAllUsers,getUserById,updateUsers, DeleteUser} = require( "../controllers/userControl.js") ;
  
// init express router
const router = express.Router();
  

// /////////////////////  Users ////////////////////// 

// Get All Users
router.get('/users',getAllUsers);
  
//Get a Single User
router.get('/user/:id',getUserById);
  
// Registering a User
// router.post('/user', login);
router.post('/register',
bodyParser.json(), (req, res)=>{
 register(req, res)
})
  
// Update Product
router.patch('/user/:id', updateUsers);
  
// Delete Product
router.delete('/user/:id', DeleteUser);

module.exports =  router;

















