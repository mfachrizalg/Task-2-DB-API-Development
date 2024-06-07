const pool = require('../config/db');
const queries = require('../queries/viewQuery');

const getAuthorBookView = (req, res) => {
    pool.query(queries.getAuthorBookView, (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getAuthorBookView
}