const {updateUser,getAllUsers,addUser,deleteUser} = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.get('/', getAllUsers);
router.put('/update', updateUser);
router.post('/add', addUser);
router.delete('/delete', deleteUser);

module.exports = router;