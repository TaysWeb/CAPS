// const express = require('express') ;
const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser') ;
const port = process.env.port || 7000 ;
const Routes = require('./routes/movieRoutes.js') ;
// const URouter = require( "./routes/users.js") 
const AuthPage = require('./middleware/authUser.js')
app.use(express.json());
  app.use(express.urlencoded({extended:false}) );
// use cors
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
app.get('/', function(req, res){ 
    res.json({ message: 'Welcome to Movies api' });
});
app.get('/admin',AuthPage(["admin", "admin"]), (req, res)=> {
  res.send('Admin Page for Admin Users Only')
})
app.use(Routes) ;

// Handling Errors
app.use((err, res) => {
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

 // // use router
// app.use('/getAll',Router);
// app.use('/users',URouter); 

 app.listen(port, () => console.log('Server running at http://localhost:7000'));



// // import express
// import express  from "express";

// // import cors
// import cors from  "cors" ;
 
// import bodyParser from  "body-parser" ;
 
// // import routes
// import Router  from  "./routes/movieRoutes.js" ;
// import URouter from "./routes/users.js"

// // init express
// const app = express();
  
// // use express json
// app.use(express.json());
  
// // use cors
// app.use(cors());
 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
  
// app.get('/', function(req, res){
//     res.json({ message: 'Welcome to movie api' });
// });

// // Handling Errors
// app.use((err, req, res, next) => {
//     console.log(err);
//     err.statusCode = err.statusCode || 500;
//     err.message = err.message || "Internal Server Error";
//     res.status(err.statusCode).json({
//       message: err.message,
//     });
// });

// // use router
// app.use(Router);
// app.use(URouter); 

// app.listen(7000, () => console.log('Server running at http://localhost:7000'));
