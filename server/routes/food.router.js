const express = require('express');
const mongoose = require('mongoose');
const dataFromServerDatabase = require('../modules/food-data.js')
const dataFromMongoDatabase = require('../modules/database-connection');
const router = express.Router();

// get route for /books
router.get('/', (req, res) => {
    console.log('meow');
    res.send(dataFromServerDatabase)
    // database Read/Find
});

module.exports = router;