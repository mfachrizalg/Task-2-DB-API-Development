const pool = require('../config/db');
const queries = require('../queries/userQuery');

const addUser = (req, res) => {
    const {userid, username, passwordhash, email} = req.body;
    pool.query(queries.addUser, [userid, username, passwordhash, email], (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results.rows);
    })}

const updateUser = (req, res) => {
    const {username, password, email} = req.body;
    pool.query(queries.updateUser, [password, email, username], (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results.rows);
    })};

const deleteUser = (req, res) => {
    const {username} = req.body;
    pool.query(queries.deleteUser, [username], (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results.rows);
    })}

const getAllUsers = (req, res) => {
    pool.query(queries.getAllUsers, (error, results) => {
        if (error) res.status(400).json({'message' :`${error}`});
        res.status(200).json(results.rows);
    });
}

module.exports = {
    updateUser,
    getAllUsers,
    addUser,
    deleteUser
}