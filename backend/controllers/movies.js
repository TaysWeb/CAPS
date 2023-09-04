// import functions from Food model

const {
    getMovies,
    getMovieById,
    insertMovie,
    updateMovieById,
    deleteMovieById,
} = require('../models/prods.js');

// get all Foods
export const getMovies =(req,res)=>{
    getMovies((err,results)=> {
        if (err) {
            res.send.status(404);
        }else {
            res.json(results);
        }
    });
};


// get single Food
export const showFoodById=(req,res)=>{
    getFoodById(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// create Food
export const createFood=(req,res)=>{
    const data = req.body;
    insertFood(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// update Food
export const updateFood=(req,res)=>{
    const data = req.body;
    const id = req.params.id;
    updateFoodById(data,id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// delete Food
export const deleteFood=(req,res)=>{
    const id = req.params.id;
    deleteFoodById(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};