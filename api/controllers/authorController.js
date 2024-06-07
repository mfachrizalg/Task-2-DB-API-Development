const pool = require('../config/db');
const queries = require('../queries/authorQuery');

const getAuthors = (req, res) => {
    pool.query(queries.getAuthors, (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getAuthors
}