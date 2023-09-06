// call on functions from prods model

import  { getMovies, getMovieById, insertMovie, updateMovieById,deleteMovieById,} from '../models/prods.js'

// get all Movies
 export const getAll = (req,res)=>{
    getMovies((err,results)=> {
        if (err) {
            res.send(err).status(500);
        }else {
            res.json(results);
        }
    });
}


// get single movie
export  const getSingle =(req,res)=>{
        getMovieById(req.params.id,(err,results)=> {
        if (err) {
            res.send(err).status(500);
        }else {
            res.json(results);
        }
    });
}

// inserting a movie
export  const createMovie =(req,res)=>{
    const data = req.body;
    insertMovie(data,(err,results)=> {
        if (err) {
            res.send(err).status(500);
        }else {
            res.json(results);
        }
    });
}

// update a movie details
export  const updateMovieDetails =(req,res)=>{
    const data = req.body;
    const id = req.params.id;
    updateMovieById(data,id,(err,results)=> {
        if (err) {
            res.send(err).status(500);
        }else {
            res.json(results);
        }
    });
}


// delete a movie
 export const deleteMovie = (req,res)=>{
    const id = req.params.id;
    deleteMovieById(id,(err,results)=> {
        if (err) {
            res.send(err).status(404);z
        }else {
            res.json(results);
        }
    });
}

