// user permissions 
 require ( "../config/db.js") ;

 const AuthPage =(Permissions) => {
    return (req,res,next) => {
      const Role = req.body.userRole;
      if (Permissions.includes(Role)) {
        
         return res.status(200).json("You  Allowed");
         next();
      } else {
        return res.status(401).json("You are not Allowed")
      }
    }
 };


 module.exports = AuthPage;