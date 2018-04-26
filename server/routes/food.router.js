const express = require('express');
const mongoose = require('mongoose');
const dataFromServerDatabase = require('../modules/food-data.js')

const router = express.Router();

// get route for /books
router.get('/', (req, res) => {
    res.send(dataFromServerDatabase)
    // database Read/Find
});

module.exports = router;