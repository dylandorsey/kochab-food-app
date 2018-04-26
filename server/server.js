const express = require('express');
const mongoose = require('mongoose');
const app = express();
// if on heroku, use the provided port || use 5000
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

// set route for serving /food
const food = require('./routes/food.router');

app.use(bodyParser.urlencoded({extended:true})); 

// Serve static files
app.use(express.static('server/public'));

// Serve /food
app.use('/food', food);

// Spin up the server
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
