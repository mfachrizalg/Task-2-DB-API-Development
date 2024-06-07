const {addWishlist, getWishlist, deleteWishlist} = require('../controllers/wishlistController');
const express = require('express');
const router = express.Router();

router.post('/add', addWishlist);
router.get('/:id', getWishlist);
router.delete('/delete', deleteWishlist);

module.exports = router;