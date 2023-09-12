const db = require( '../config/db.js'); 

class Movies {
    // Get All Movies
    getMovies(req,res) {
      const query = `SELECT MovieID,Title,Run_Time ,info,released, Genre, cineplex,Rating,image FROM Movies ;`
      db.query(query, (err,results)=> {
       if (err)   throw err
       res.json({
        status:res.statusCode,
        results
       });
      
      })
    } 
}
module.exports = Movies 