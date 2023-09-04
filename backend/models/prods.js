const db = require('../config/db.js'); 

// Get All Products
export const getProducts = (result) => {
    db.query("SELECT MovieID,Title,Run_Time ,info,released, Genre, cineplex,Rating,image FROM Movies", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Product
export const getProductById = (id, result) => {
    db.query("SELECT MovieID,Title,Run_Time ,info,released, Genre, cineplex ,Rating ,image  FROM product WHERE  MovieID= ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Product to Database
export const insertProduct = (data, result) => {
    db.query("INSERT INTO Movies SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Product to Database
export const updateProductById = (data, id, result) => {
    db.query("UPDATE Movies SET  MovieID = ?, ,Title = ?,  Run_Time = ?, info = ?, released = ?, Genre = ?, cineplex = ?, Rating =?, image = ?   WHERE product_id = ?", [ data.MovieID,data.Title,data.Run_Time ,data.info, data.released,data.Genre, data.cineplex ,data.Rating ,data.image, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
            console.log("Record was updated Successfully");
        }
    });   
}
  
// Delete Product to Database
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM Movies WHERE MovieID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        
        }
    });   
}