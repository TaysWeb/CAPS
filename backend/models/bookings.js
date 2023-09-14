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
      CreateBooking(req,res){
         const data = req.body
         const booking = {
            seats : data.seats,
            Day_of_Movie : data.movie_day,
            movie : data.MovieID,
            Number_of_People : data.number_people
         }
         const query =`Insert into  Bookings SET ? ; `  ;   
         db.query(query,(err)=>{
            if(err) throw err  
            res.json({
               status:res.statusCode,
               msg:"Bookings Details was successfully Added"
            });
         })     

      } 
 updateBooking(req,res) {
    const query=`UPDATE Bookings SET  ? where bookID = ?; `  ;        
    db.query(query,[req.body,req.params.id],(err)=>{
        if(err) throw err  
        res.json({
           status:res.statusCode,
           msg:"Bookings Details was updated Successfully"
        });
    })
   }
   DeleteBooking(req,res) {
      const query=`Delete from Bookings where bookID = ${req.params.id} ; `  ;        
      db.query(query,(err)=>{
          if(err) throw err  
          res.json({
             status:res.statusCode,
             msg:"Booking has been Deleted"
          });
      })
     }

}
module.exports =  Bookings ;
