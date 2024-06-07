const pool = require('../config/db');

const getBooks = (req, res) => {
    const limit = req.body.limit;
    if (limit == -1){ 
        pool.query("SELECT * FROM book", (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results.rows);
    })} else {
        const query = `SELECT * FROM book LIMIT ${limit}`
        pool.query(query, (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results.rows);
    })};
}

const getBooksbyISBN = (req, res) => {
    const isbn = req.body.isbn;
    const query = `SELECT * FROM book WHERE isbn = '${isbn}'`
    pool.query(query, (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        if (results.rows.length == 0) {
            res.status(404).json({'message' : 'Book not found'});
        }
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getBooks,
    getBooksbyISBN
}