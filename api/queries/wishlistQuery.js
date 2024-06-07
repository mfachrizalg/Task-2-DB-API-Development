const addWishlistbyUserID = "INSERT INTO wishlist (userid, bookid) VALUES ($1, $2) RETURNING *"
const getWishlistbyUserID = "SELECT * FROM wishlist WHERE userid = $1"
const deleteWishlistbyUserID = "DELETE FROM wishlist WHERE userid = $1 AND bookid = $2"

module.exports = {
    addWishlistbyUserID,
    getWishlistbyUserID,
    deleteWishlistbyUserID
}