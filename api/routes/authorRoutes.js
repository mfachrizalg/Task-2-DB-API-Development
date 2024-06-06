const {getAuthors} = require('../controllers/authorController');
const express = require('express');
const router = express.Router();

router.get('/',getAuthors);

module.exports = router;