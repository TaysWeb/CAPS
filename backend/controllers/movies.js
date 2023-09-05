// call on functions from prods model
const express= require('express') ;
const {
    getMovies,
    getMovieById,
    insertMovie,
    updateMovieById,
    deleteMovieById,
} = require('../models/prods.js');

// get all Foods
 const getAll = (req,res)=>{
    getMovies((err,results)=> {
        if (err) {
            res.send.status(404);
        }else {
            res.json(results);
        }
    });
};


// get single Food
      const getSingle =(req,res)=>{
        getMovieById(req.params.id,(err,results)=> {
        if (err) {
            res.send(err).status(404);
        }else {
            res.json(results);
        }
    });
};

// create Food
const createMovie =(req,res)=>{
    const data = req.body;
    insertMovie(data,(err,results)=> {
        if (err) {
            res.send(err).status(404);
        }else {
            res.json(results);
        }
    });
};

// update Food
 const updateMovieDetails =(req,res)=>{
    const data = req.body;
    const id = req.params.id;
    updateMovieById(data,id,(err,results)=> {
        if (err) {
            res.send(err).status(404);
        }else {
            res.json(results);
        }
    });
};


// delete Food
 const deleteMovie = (req,res)=>{
    const id = req.params.id;
    deleteMovieById(id,(err,results)=> {
        if (err) {
            res.send(err).status(404);
        }else {
            res.json(results);
        }
    });
};

module.exports = {
    express
}