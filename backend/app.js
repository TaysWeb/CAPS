const express = require('express') ;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser') ;
app.use(express.json());
  
// use cors
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
app.get('/home', function(req, res){ 
    res.json({ message: 'Welcome to Movies api' });
});


  
app.listen(5000, () => console.log('Server running at http://localhost:7000'));