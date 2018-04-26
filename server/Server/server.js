const express = require('express');
const mongoose = require('mongoose');
const app = express();
// if on heroku, use the provided port || use 5000
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

// const databaseUrl = 'mongodb://localHost:27017/food_app';
// mongoose.connect(databaseUrl);
// mongoose.connection.on('connected', (error) => {
//     console.log('mongoose connected on', databaseUrl);
// })
// mongoose.connection.on('error', (error) => {
//     console.log('mongoose connection failed: ', error);
// });

// Configures bodyParser for jQuery
// MUST BE DONE BEFORE OUR app.post
app.use(bodyParser.urlencoded({extended:true})); 

// Serve static files
app.use(express.static('server/public'));

// Spin up the server
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
