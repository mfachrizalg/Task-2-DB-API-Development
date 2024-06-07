const {bookTransaction} = require('../controllers/tclController');
const express = require('express');
const router = express.Router();

router.post('/book', bookTransaction);

module.exports = router;