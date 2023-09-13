// const express = require('express') ;
const {express,routes} = require('./routes/users.js')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser') ;
const port = process.env.port || 7000 ;
const Routes = require('./routes/movieRoutes.js') ;
// const URouter = require('./routes/users.js') ;
// const URouter = require( "./routes/users.js") 
const AuthPage = require('./middleware/authUser.js')
app.use(express.json());
  app.use(express.urlencoded({extended:false}),routes);
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

 // use router
// app.use(URouter); 

 app.listen(port, () => console.log('Server running at http://localhost:7000'));


