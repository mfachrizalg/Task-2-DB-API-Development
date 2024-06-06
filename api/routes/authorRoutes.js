const {getAuthors} = require('../controllers/author');
const express = require('express');
const router = express.Router();

router.get('/',getAuthors);

module.exports = router;