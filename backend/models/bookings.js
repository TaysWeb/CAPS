// model for bookings 
const db = require('../config/db.js');

class Bookings {
    FetchBookings(req,res){
        const query = `Select bookID,seats ,movie_day,Movies.MovieID,number_people,Users.userID,total from Bookings 
        inner Join Movies ON Bookings.MovieID = Movies.MovieID 
        inner Join Users ON Bookings.userID  = Users.userID  ;   `;
     db.query(query,(err,results)=>{
          if(err) throw err
          res.json({
            status:res.statusCode,
            results,
         });
     })  
    }
    FetchBooking(req,res){
        const query = `Select bookID,seats ,movie_day,Movies.MovieID,number_people,Users.userID,total from Bookings where bookID = ${req.params.id} 
        inner Join Movies ON Bookings.MovieID = Movies.MovieID 
        inner Join Users ON Bookings.userID  = Users.userID  ;   `;
     db.query(query,[req.body,req.params.id],(err,results)=>{
          if(err) throw err
          res.json({
            status:res.statusCode,
            results,
         });
     })  
    }
      
 updateBooking(req,res) {
    const query=`UPDATE Bookings SET  ? where userID = ${req.params.id} ; `  ;        
    db.query(query,(err)=>{
        if(err) throw err  
        res.json({
           status:res.statusCode,
           msg:"Bookings Details was updated Successfully"
        });
    })
   }
}
module.exports =  Bookings ;
