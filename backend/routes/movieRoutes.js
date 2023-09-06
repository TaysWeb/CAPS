
// import express
import express from "express";
  
// import function from controller
import  { getAll,getSingle,createMovie,updateMovieDetails,deleteMovie  } from "../controllers/movies.js" ;
  
// init express router
const router = express.Router();
  

// /////////////////////  Movies ////////////////////// 


// Get All Product
router.get('/getAll', getAll);
  
//Get Single Product
router.get('/Movie/:id', getSingle);
  
// Create New Product
router.post('/Movie', createMovie);
  
// // Update Product
router.patch('/Movie/:id', updateMovieDetails);
  
// // Delete Product
router.delete('/Movie/:id', deleteMovie);
  
// export default router
export default router;

















