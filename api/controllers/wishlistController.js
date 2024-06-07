const pool = require('../config/db');
const queries = require('../queries/wishlistQuery');

const addWishlist = (req, res) => {
    const {isbn, username} = req.body;
    pool.query(queries.addWishlist, [isbn, username], (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results.rows);
    });
}

const getWishlistbyUser = (req, res) => {
    const username = req.params.username;
    pool.query(queries.getWishlistbyUser, [username], (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results.rows);
    });
}

const deleteWishlistbyUser = (req, res) => {
    const {isbn, username} = req.body;
    pool.query(queries.deleteWishlistbyUser, [isbn, username], (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results.rows);
    });
}
module.exports = {
    addWishlist,
    getWishlistbyUser,
    deleteWishlistbyUser
}