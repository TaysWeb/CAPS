import db from '../config/db.js'; 


// Get All Movies
export const getMovies = (result) => {
    db.query("SELECT MovieID,Title,Run_Time ,info,released, Genre, cineplex,Rating,image FROM Movies", (err, results) => {             
        if(err) {
            // console.log(err);
            // result(err, null);
            res.json({
                status: res.statusCode (500),
                results
            })
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single View Movie
export const  getMovieById = (id, result) => {
    db.query("SELECT MovieID,Title,Run_Time ,info,released, Genre, cineplex ,Rating ,image  FROM Movies WHERE  MovieID= ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert A movie to database
export const insertMovie = (data, result) => {
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
export const updateMovieById = (data, id, result) => {
    db.query("UPDATE Movies SET  MovieID = ?, ,Title = ?,  Run_Time = ?, info = ?, released = ?, Genre = ?, cineplex = ?, Rating =?, image = ?   WHERE product_id = ?", [ data.MovieID,data.Title,data.Run_Time ,data.info, data.released,data.Genre, data.cineplex ,data.Rating ,data.image, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
            console.log("Movie Details was updated Successfully");
        }
    });   
}
  
// Delete Product to Database
export const deleteMovieById = (id, result) => {
    db.query("DELETE FROM Movies WHERE MovieID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
            console.log("Movie Details was deleted Successfully");
        }
    });   
}




