const pool = require('../config/db');
const queries = require('../queries/tclQuery');

const bookTransaction = (req, res) => {
    const {bookid, title, publisherid, isbn, pages, publisheddate, authorid} = req.body;
    pool.query("BEGIN",(error, results) => {
        pool.query(queries.bookTransaction, [bookid, title, publisherid, isbn, pages, publisheddate], (error, results) => {
            if (error) res.status(400).json({'message' :`${error}`});
            pool.query(`INSERT INTO public.AuthorBook(BookID, AuthorID) VALUES ((SELECT BookID FROM Book WHERE ISBN='${isbn}'), ${authorid});`, (error, results) => {
                if (error) res.status(400).json({'message' :`${error}`});
                pool.query("COMMIT;",(error, results) => {
                    if (error) pool.query("ROLLBACK;",(error, results) => {
                        res.status(400).json({'message' :`${error}`});
                    });
                    res.status(200).json({'message' : 'Transaction successful'});
                });
            });
        });
    });
}

module.exports = {
    bookTransaction
}