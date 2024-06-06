const pool = require('../config/db');

const getAuthors = (req, res) => {
    pool.query('SELECT * FROM author', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getAuthors
}