const {getAuthorBookView} = require('../controllers/viewController');
const express = require('express');
const router = express.Router();

router.get('/authorbook',getAuthorBookView);

module.exports = router;