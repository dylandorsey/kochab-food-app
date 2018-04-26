const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
// const Food = require('../models/food.schema');
// const dataFromDatabase = require('../modules/database-connection');
const dataFromServerDatabase = require('../modules/food-data.js')

// get route for /books
router.get('/', (req, res) => {
    console.log('meow');
    console.log(dataFromServerDatabase)
    // database Read/Find
});

module.exports = router;