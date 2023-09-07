
// import express
import express from "express";
  
// import function from controller
import  { getAllUsers,getUserById, getUserByEmail,updateUser,DeleteUser  } from "../controllers/userControl.js" ;
  
// init express router
const router = express.Router();
  

// /////////////////////  Movies ////////////////////// 


// Get All Product
router.get('/users',  getAllUsers);
  
//Get Single Product
router.get('/users/:id',getUserById);
  
// Create New Product
router.post('/user', getUserByEmail);
  
// // Update Product
router.patch('/user/:id', updateUser);
  
// // Delete Product
router.delete('/user/:id', DeleteUser);
  
// export default router
export default router;

















