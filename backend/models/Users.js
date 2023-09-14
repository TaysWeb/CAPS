// import connection
const db = require ( "../config/db.js");

 const { hash, genSalt, compare } = require( "bcrypt") ;
const { Token } = require("../middleware/authencation.js");

  
class Users {
// get all user
 fetchAllUser(req,res) {
    const query=`SELECT userID,userfirst,userLast,Gender,userRole,email,Password,userProfile FROM Users ; ` ;
    db.query(query,(err,results)=>{
     if (err) throw err 
     res.json({
        status:res.statusCode,
        results,
     });
    });
}
 fetchUserById(req,res) {
    const query=`SELECT  userID,userfirst,userLast,Gender,userRole,email,Password,userProfile FROM Users WHERE userId=  ${req.params.id} ;`;
    db.query(query,(err,results)=>{
        if (err) throw err 
        res.json({
           status:res.statusCode,
           results,
        });
       });
}

 // registering 
  async register(req,res){
    const data = req.body
    const salt = await genSalt(12)  
    //encrypting the password
    data.Password = await hash(data.Password,salt)
    //payload
    const user = {    
        email : data.email,
        password: data.Password
    }
    //mysql query
    const query = `insert into Users SET ? ;`
    db.query(query,(err)=>{
        if (err) throw err 
        //token 
        let CToken = Token(user)
        res.json({
           status:res.statusCode,
           CToken,
           msg:"You have Successfully Registered."
        });
       });
  }
 //login 
 login(req, res) {
         const {email, password} = req.body
         // query
         const query = `
         SELECT userfirst,userLast,Gender,Password,userProfile 
         FROM Users
         WHERE email = ${email};
         `
         db.query(query, async (err, result)=>{
             if(err) throw err
             if(!result?.length){
                 res.json({
                     status: res.statusCode,
                     msg: "You provided a wrong email."
                 });
             }else {
                await compare(password, result[0].password,(err, Result)=>{
                         if(err) throw err
                         // Create a token
                         const cToken =
                         Token({
                             email,
                             password
                         })
                         if(Result) {
                             res.json({
                                 msg: "Logged in",
                                 cToken,
                                 result: result[0]
                             })
                         }if(!Result) {
                             res.json({
                                 status: res.statusCode,
                                 msg: "Invalid password or you have not registered"
                             })
                         } else {
                            res.json({
                                status: res.statusCode,
                                msg:"Email or password already exists"
                            })
                        }
                     })
             }
         })
     }

// updating a user
 updateUser(req,res) {
 const query=`UPDATE Users SET  ? where userID = ? ; `  ;        
 db.query(query[req.body,req.params.id],(err)=>{
     if(err) throw err  
     res.json({ 
        status:res.statusCode,
        msg:"Movie Details was updated Successfully"
     });
 })
}
DeleteUser(req,res) {
    const query=`Delete from Users where userID = ${req.params.id} ; `  ;        
    db.query(query,(err)=>{
        if(err) throw err  
        res.json({
           status:res.statusCode,
           msg:"Movie has been Deleted"
        });
    })
   }

} // end of class Users
module.exports = Users ;