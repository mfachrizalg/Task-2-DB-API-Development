const addWishlist = "SELECT * FROM wishlist WHERE user_id = $1 AND product_id = $1"
const getWishlistbyUser = "SELECT * FROM wishlist WHERE user_id = $1"
const deleteWishlistbyUser = "DELETE FROM wishlist WHERE user_id = $1 AND product_id = $1"

module.exports = {
    addWishlist,
    getWishlistbyUser,
    deleteWishlistbyUser
}