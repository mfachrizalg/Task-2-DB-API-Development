const {getBooksByISBN} = require('../controllers/bookController');
const express = require('express');
const router = express.Router();

router.get('/:isbn',getBooksByISBN);

module.exports = router;