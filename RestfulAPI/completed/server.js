const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const Product = require('./app/models/model'); //created model loading here
const bodyParser = require('body-parser');
const path = require('path');
   
app.use(express.static(path.join(__dirname, 'app_front_end')));    

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/StoreDB', {
  useMongoClient: true,
}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/route'); //importing route
routes(app); //register the route

app.listen(port); 

console.log('RESTful API server started on: ' + port);