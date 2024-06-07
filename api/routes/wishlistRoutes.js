const {addWishlist, getWishlistbyUser, deleteWishlistbyUser} = require('../controllers/wishlistController');
const express = require('express');
const router = express.Router();

router.post('/add', addWishlist);
router.get('/:username', getWishlistbyUser);
router.delete('/delete', deleteWishlistbyUser);

module.exports = router;