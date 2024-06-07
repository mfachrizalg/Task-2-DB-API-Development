const {updateUser,getAllUsers} = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.get('/', getAllUsers);
router.put('/update', updateUser);

module.exports = router;