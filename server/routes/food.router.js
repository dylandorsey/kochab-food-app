const express = require('express');
const mongoose = require('mongoose');
const Food = require('../models/food.schema');
const dataFromMongoDatabase = require('../modules/database-connection');
const router = express.Router();

// get route for /food
router.get('/', (req, res) => {
    console.log('meow');
    // database Read/Find
    Food.find({})
    // case 1: success, what you wanted happened
    .then((dataFromMongoDatabase) => {
        // this is a promise from mongo
        // dataFromDatabase is from mongo database
        console.log(dataFromMongoDatabase);
        res.send(dataFromMongoDatabase);
    // case 2: error, different things happened
    }).catch((error) => {
        console.log('error with food.find', error);
        res.sendStatus(500);
    });
});

module.exports = router;