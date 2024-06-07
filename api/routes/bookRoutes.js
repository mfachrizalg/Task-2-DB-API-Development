const {getBooks,getBooksbyISBN} = require('../controllers/bookController');
const express = require('express');
const router = express.Router();

router.get('/',getBooks);
router.get('/search',getBooksbyISBN);

module.exports = router;