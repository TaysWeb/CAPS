
// import express
const express = require("express")

// const bodyParser = require("body-parser")
const router = express.Router() 
const {getMovies} = require('../models/prods.js')


// /////////////////////  Movies ////////////////////// 


// Get All Product 
router.get('/getAll',getMovies) ;


module.exports =  router; 



//Get Single Product
// router.get('/Movie/:id',(req,res)=>{
//     movies.getSingle(req,res);
// })
  
// Create New Product
// router.post('/Movie', createMovie);
  
 // Update Product
// router.patch('/Movie/:id', bodyParser.json()
// updateMovieDetails);
  
// router.put('/Movie/:id',
// bodyParser.json(), (req, res)=>{
//     updateMovieDetails(req, res)
// })
// // Delete Product
// router.delete('/Movie/:id', deleteMovie);
  



















