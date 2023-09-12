
// import express
const express = require("express") ;
const bodyParser = require("body-parser")
const router = express.Router() ;
const {getAll,getSingle,createMovie,  updateMovieDetails,deleteMovie} = require('../controllers/movies.js')


// /////////////////////  Movies ////////////////////// 


// Get All Product 
router.get('/getAll', getAll);


//Get Single Product
router.get('/Movie/:id',getSingle)


//Create New Product
router.post('/Movie', createMovie)

//  //Update Product
// router.patch('/Movie/:id', bodyParser.json(),(res,req) =>{
//    updateMovieDetails(req,res)
// });
  
router.patch('/Movie/:id',updateMovieDetails)
// Delete Product
router.delete('/Movie/:id', deleteMovie);
  
module.exports =  router; 


















