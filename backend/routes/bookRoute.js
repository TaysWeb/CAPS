// import express
const express = require("express");
const bodyParser = require('body-parser');
  
const {bookings} = require( "../models") ;
  
// init express router
const route = express.Router();



//////////////////////////  Bookings  ////////////////////// 

// Get All Bookings
route.get('/bookings', (req,res)=> {
    bookings.FetchBookings(req,res)
}) 
  
// //Get a Single Booking
route.get('/bookings/:id',(req,res)=>{
bookings.FetchBookings(req,res)
 });
  
 // Registering a User

route.post('/booking',
bodyParser.json(), (req, res)=>{
 bookings.CreateBooking(req, res)
})
  
// Update Product
route.patch('/booking/:id',bodyParser.json(), (req,res)=>{
    bookings.updateBooking(req,res)
});
  
// Delete Product
route.delete('/booking/:id',bodyParser.json(), (req,res)=>{
    bookings.DeleteBooking(req,res)
});

module.exports = {express ,route}