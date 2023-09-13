
// import express
const express = require("express");
const bodyParser = require('body-parser');
  
const {users} = require( "../models") ;
  
// init express router
const routes = express.Router();
  

// /////////////////////  Users ////////////////////// 

// Get All Users
routes.get('/users', (req,res)=> {
    users.fetchAllUser(req,res)
}) 
  
// //Get a Single User
routes.get('/user/:id',(req,res)=>{
users.fetchUserById(req,res)
 });
  
 // Registering a User

routes.post('/register',
bodyParser.json(), (req, res)=>{
 users.register(req, res)
})
  
// // Update Product
// router.patch('/user/:id', updateUsers);
  
// // Delete Product
// router.delete('/user/:id', DeleteUser);

module.exports = {express ,routes}

















