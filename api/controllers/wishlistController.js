const pool = require('../config/db');
const queries = require('../queries/wishlistQuery');

const addWishlist = (req, res) => {
    const {userid, bookid} = req.body;
    pool.query(queries.addWishlistbyUserID, [userid, bookid], (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results.rows);
    });
}

const getWishlist = (req, res) => {
    const userid = req.params.id;
    pool.query(queries.getWishlistbyUserID, [userid], (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        if (results.rows.length == 0) res.status(404).json({'message' : 'No books in wishlist'});
        res.status(200).json(results.rows);
    });
}

const deleteWishlist = (req, res) => {
    const {userid, bookid} = req.body;
    pool.query(queries.deleteWishlistbyUserID, [userid, bookid], (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results);
    });
}
module.exports = {
    addWishlist,
    getWishlist,
    deleteWishlist
}