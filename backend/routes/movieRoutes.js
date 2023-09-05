const { getAll,getSingle,createMovie,updateMovieDetails,deleteMovie } = require('../controllers/movies.js') ;
const express = require('express') ;
const MovieRouter = express.Router() ;

/////////////////////  Movies //////////////////////

MovieRouter.get('/allMovies',getAll);






















module.exports = MovieRouter;