const pool = require('../config/db');
const queries = require('../queries/bookQuery');

const getBooksByISBN = (req, res) => {
    const isbn = req.params.isbn;
    pool.query(queries.searchByISBN, [isbn], (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getBooksByISBN
}