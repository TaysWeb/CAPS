const express = require('express') ;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser') ;
const Routes = require('./routes/movieRoutes');
app.use(express.json());
  
// use cors
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
app.get('/home', function(req, res){ 
    res.json({ message: 'Welcome to Movies api' });
});

// Handling Errors
app.use((err, req, res, next) => {
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.use(Routes) ;
app.listen(5000, () => console.log('Server running at http://localhost:7000'));