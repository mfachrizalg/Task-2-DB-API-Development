const pool = require('../config/db');

const getAuthors = (req, res) => {
    pool.query('SELECT * FROM author', (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getAuthors
}