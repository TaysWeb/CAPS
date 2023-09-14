
// import express
const express = require("express");
const bodyParser = require('body-parser');
  
const {users,bookings} = require( "../models") ;
  
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
  
// Update Product
routes.patch('/user/:id',bodyParser.json(), (req,res)=>{
    users.updateUser(req,res)
});
  
// Delete Product
routes.delete('/user/:id',bodyParser.json(), (req,res)=>{
    users.DeleteUser(req,res)
});


//////////////////////////  Bookings  ////////////////////// 

// Get All Bookings
routes.get('/bookings', (req,res)=> {
    bookings.FetchBookings(req,res)
}) 
  
// //Get a Single Booking
routes.get('/bookings/:id',(req,res)=>{
bookings.FetchBookings(req,res)
 });
  
 // Registering a User

routes.post('/booking',
bodyParser.json(), (req, res)=>{
 bookings.CreateBooking(req, res)
})
  
// Update Product
routes.patch('/booking/:id',bodyParser.json(), (req,res)=>{
    bookings.updateBooking(req,res)
});
  
// Delete Product
routes.delete('/booking/:id',bodyParser.json(), (req,res)=>{
    bookings.DeleteBooking(req,res)
});

module.exports = {express ,routes}

















