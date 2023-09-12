// // call on functions from prods model

// const {getMovies, getMovieById, insertMovie, updateMovieById,deleteMovieById} = require ('../models/prods.js');

// // get all Movies
// const getAll = (req,res)=>{
//     getMovies((err,results)=> {
//         if (err) {
//             res.send(err).status(500);
//         }else {
//             res.json(results);
//         }
//     });
// }


// // get single movie
//  const getSingle =(req,res)=>{
//         getMovieById(req.params.id,(err,results)=> {
//         if (err) {
//             res.send(err).status(500);
//         }else {
//             res.json(results);
//         }
//     });
// }

// // inserting a movie
//  const createMovie =(req,res)=>{
//     const data = req.body;
//     insertMovie(data,(err,results)=> {
//         if (err) {
//             res.send(err);
//         }else {
//             res.json(results);
//             console.log("Movie Details was added Successfully");
//         }
//     });
// }

// // update a movie details
//  const updateMovieDetails =(req,res)=>{
//     const data = req.body;
//     const id = req.params.id;
//     updateMovieById(data,id,(err,results)=> {
//         if (err) {
//             res.send(err).status(500);
//         }else {
//             res.json(results);
//         }
//     });
// }


// // delete a movie
// const deleteMovie = (req,res)=>{
//     const id = req.params.id;
//     deleteMovieById(id,(err,results)=> {
//         if (err) {
//             res.send(err).status(404);z
//         }else {
//             res.json(results);
//         }
//     });
// }

// module.exports= { getAll,getSingle,createMovie,updateMovieDetails, deleteMovie};